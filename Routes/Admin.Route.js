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


router.get('/CourseManagement', async (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;
    const List = await knex('course').limit(limit).offset(offset)
    res.json({List: List, user: decode});
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

router.get('/AddNewStudent', (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    res.json({user: decode});
})
router.get('/AddNewLecture', (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    res.json({user: decode});
})

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
router.post('/DeleteStudent/:id',  async (req, res) =>{
   await knex('account').where('id', req.params.id).del();
});
router.post('/DeleteLecture/:id',  async (req, res) =>{
    await knex('account').where('id', req.params.id).del();
});

module.exports = router;