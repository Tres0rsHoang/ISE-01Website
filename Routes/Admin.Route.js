const express = require('express');
const router = express.Router();
const Token = require('../middleWare/token')
const knex = require('../utils/db');

router.get('/',async (req, res, next)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const StudentCount = await knex('account').count().where('usertype', 3);
    const CourseCount = await knex('course').count();
    const LecturerCount = await knex('account').count().where('usertype', 2);
    res.json({
        StudentCount: StudentCount[0].count,
        CourseCount: CourseCount[0].count,
        LecturerCount: LecturerCount[0].count,
        user: decode
    });
});
router.get('/EditStudent/:id', async (req, res)=>{
    const student = await knex('account').whereRaw('id = ?', [req.params.id])
    const decode =  Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    res.json({user: decode, student: student[0]});
});
router.get('/EditLecture/:id', async (req, res)=>{
    const Lecture = await knex('account').whereRaw('id = ?', [req.params.id])
    const decode =  Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    res.json({user: decode, Lecture: Lecture[0]});
});

router.get('/StudentManagement', async (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;
    const List = await knex('account').where('usertype', 3).limit(limit).offset(offset)
    const CountList = (await knex('account').where('usertype', 3).count('id'))[0].count;
    let pages = Math.floor(CountList / limit);
    if (CountList % limit > 0) pages+=1;
    res.json({List: List, user: decode, pages: pages});
});
router.get('/LectureManagement', async (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;
    const List = await knex('account').where('usertype', 2).limit(limit).offset(offset)
    const CountList = (await knex('account').where('usertype', 2).count('id'))[0].count;
    let pages = Math.floor(CountList / limit);
    if (CountList % limit > 0) pages+=1;
    res.json({List: List, user: decode, pages: pages});
});
router.get('/CourseManagement', async (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;
    let List = await (knex.raw("SELECT courseid, coursename, subjectid, filepath, rating, filepath, createddate, fullname\n"+
        "FROM course join account a on course.lecturerid = a.id\n" +
        "LIMIT ?\n" +
        "OFFSET ?",[limit,offset]));
    List = List.rows;
    res.json({List: List, user: decode});
});

router.get('/AddNewStudent', (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    res.json({user: decode});
})
router.get('/AddNewLecture', (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    res.json({user: decode});
})
router.get('/AddNewCourse', async (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);

    const SubjectList = await knex('subject').select();

    res.json({user: decode, subjects: SubjectList});
})
router.get('/StudentOfCourse/:id', async (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;

    const List = await knex('account')
        .join('register as r', {'account.id': 'r.studentid'})
        .where('r.courseid', req.params.id)
        .where('usertype', 3)
        .offset(offset)
        .limit(limit);
    let CountList = await knex('account')
        .join('register as r', {'account.id': 'r.studentid'})
        .where('r.courseid', req.params.id)
        .where('usertype', 3);
    CountList = CountList.length;
    let pages = Math.floor(CountList / limit);
    if (CountList % limit > 0) pages+=1;
    res.json({List: List, user: decode, pages: pages});
});

router.post('/EditStudent/:id', async (req, res)=>{
    const id = Number(req.params.id);
    await knex('account').where('id', id).del();
    await knex('account').insert(req.body);

    const newID = await knex('account').whereRaw('accountusername=?',[req.body.accountusername]);
    res.json({mess: 'Edit student successfully. New id of this student is ' + newID[0].id.toString()});
});
router.post('/EditLecture/:id', async (req, res)=>{
    const id = Number(req.params.id);
    await knex('account').where('id', id).del();
    await knex('account').insert(req.body);

    const newID = await knex('account').whereRaw('accountusername=?',[req.body.accountusername]);
    res.json({mess: 'Edit lecture successfully. New id of this lecture is ' + newID[0].id.toString()});
});
router.post('/AddNewStudent', async (req, res) =>{
    const Exist = await knex('account').count('id').whereRaw('accountusername LIKE ?', [req.body.accountusername]);
    if (Exist[0].count > 0) res.json({mess: 'This user name already have in student list'});
    else {
        await knex('account').insert(req.body);
        res.json({mess: 'Added a new student successfully.'});
    }
});
router.post('/AddNewLecture', async (req, res) =>{
    const Exist = await knex('account').count('id').whereRaw('accountusername LIKE ?', [req.body.accountusername]);
    if (Exist[0].count > 0) res.json({mess: 'This user name already have in lecture list'});
    else {
        await knex('account').insert(req.body);
        res.json({mess: 'Added a new lecture successfully.'});
    }
});
router.post('/AddNewCourse', async (req, res) =>{
    if (req.body.courseid === undefined) return;
    const Exist = await knex('course').count('courseid').whereRaw('courseid LIKE ?', [req.body.courseid]);
    if (Exist[0].count > 0) {
        res.json({mess: 'This course id already have in course list'});
        return;
    }
    const ExistLecturer = await knex('account').where('usertype', 2).where('id', req.body.lecturerid);
    if (ExistLecturer.length === 0) res.json({mess: 'Can\'t find this lecturer id.'});
    else {
        await knex('course').insert(req.body);
        res.json({mess: 'Added a new course successfully.'});
    }
});
router.post('/DeleteStudent/:id',  async (req, res) =>{
    await knex('register').where('studentid', req.params.id).del();
    await knex('account').where('id', req.params.id).del();
});
router.post('/DeleteLecture/:id',  async (req, res) =>{
    await  knex('course').where('lecturerid', req.params.id).del();
    await knex('account').where('id', req.params.id).del();
});
router.post('/DeleteCourse/:id',  async (req, res) =>{
    await knex('course').where('courseid', req.params.id).del();
});
router.post('/CourseDeleteStudent/:id', async (req, res) =>{
    await knex('register')
        .where('studentid', req.query.studentid)
        .where('courseid', req.params.id).del()
});
router.post('/AddNewStudentIntoCourse/:id', async (req, res) =>{
    const courseId = req.params.id || null;
    const studentId = req.query.studentid || null;
    if (courseId == null || studentId == null) return;
    const isStudent = await knex('account').where('id', studentId).where('usertype', 3);
    if (isStudent.length === 0){
        res.json({mess: 'Can\'t find this student.'});
        return;
    }

    const Exist = await knex("register").where('courseid', courseId).where('studentid', studentId);
    if (Exist.length !== 0){
        res.json({mess: 'This student already have in this course'});
        return;
    }
    const newStudent = {
        studentid: studentId,
        courseid: courseId,
        grade: null,
        registercoursedate: new Date()
    }
    await knex("register").insert(newStudent);
    res.json({mess: 'Ok'});
});

module.exports = router;