const express = require('express');
const router = express.Router();
const Token = require('../middleWare/token')
const knex = require('../utils/db');

router.get('/', async (req, res) => {
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const CourseCount = await knex('course').count().where('lecturerid', decode.id);
    res.json({
        user: decode,
        CourseCount: CourseCount[0].count,
    });
});

router.get('/Courses', async (req, res) => {
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const listCourse = await knex.select('c.coursename', 'c.courseid', 'a.fullname').from('course as c')
        .join('account as a', 'a.id', 'c.lecturerid')
        .where('lecturerid', decode.id);
    res.json({
        user: decode,
        list: listCourse
    })
});

router.get('/CourseDetail', async (req, res) => {
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const courseDetail = await knex.select('c.coursename', 'a.fullname', 'l.lessonname', 'l.lessondescription', 'l.linkvideo').from('course as c')
        .join('account as a', 'a.id', 'c.lecturerid')
        .join('lesson as l', 'l.courseid', 'c.courseid')
        .where('c.lecturerid', '=', decode.id)
        .andWhere('c.courseid', '=', req.query.courseId)
        .andWhereLike('l.lessonname', req.query.lessonName + '%')
    const lessons = await knex.select('l.lessonname').from('lesson as l')
        .join('course as c', 'c.courseid', 'l.courseid')
        .where('c.courseid', '=', req.query.courseId)
        .orderBy('l.lessonname', 'asc');
    res.json({
        courseDetail: courseDetail[0],
        lessons: lessons,
        user: decode
    })
});

router.get('/CourseAssignments', async (req, res) => {
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const courseName = await knex.select('coursename').from('course').where('courseid', '=', req.query.courseId);
    const assignments = await knex.select('a.assignmentname').from('assignments as a')
        .join('course as c', 'c.courseid', 'a.courseid')
        .where('c.courseid', '=', req.query.courseId);
    const lessons = await knex.select('l.lessonname').from('lesson as l')
        .join('course as c', 'c.courseid', 'l.courseid')
        .where('c.courseid', '=', req.query.courseId)
        .orderBy('l.lessonname', 'asc');
    res.json({
        courseName: courseName[0],
        assignments: assignments,
        lessons: lessons,
        user: decode
    })
});

router.get('/CourseMaterials', async (req, res) => {
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const courseName = await knex.select('coursename').from('course').where('courseid', '=', req.query.courseId);
    const materials = await knex.select('m.materialname', 'f.filetype').from('materials as m')
        .join('course as c', 'c.courseid', 'm.courseid')
        .join('files as f', 'f.filename', 'm.materialname')
        .where('f.isassignment', '=', 'false')
        .andWhere('c.courseid', '=', req.query.courseId)
        .orderBy('m.materialname', 'asc');
    const lessons = await knex.select('l.lessonname').from('lesson as l')
        .join('course as c', 'c.courseid', 'l.courseid')
        .where('c.courseid', '=', req.query.courseId)
        .orderBy('l.lessonname', 'asc');
    res.json({
        courseName: courseName[0],
        materials: materials,
        lessons: lessons,
        user: decode
    })
});

router.post('/DeleteMaterial', async (req, res) => {
    const materialFiles = await knex.select('f.*').from('materials as m')
        .join('files as f', 'f.filename', 'm.materialname')
        .where('f.filename', '=', req.body.materialName)
    if (materialFiles.length == 0) {
        res.json({
            delMess: "Can't find material file in our system"
        })
    }
    if (materialFiles.length == 1) {
        await knex('files as f')
            .where('f.filename', '=', req.body.materialName)
            .del()
        await knex('materials as m').where('m.materialname', '=', req.body.materialName).del()
    }
    else {
        await knex('files as f').where('f.filename', '=', req.body.materialName)
            .andWhere('f.filetype', '=', req.body.materialFiletype).del()
    }
    res.json({
        delMess: "Delete material successfully"
    })
})

router.get('/AssignmentDetail', async (req, res) => {
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const courseName = await knex.select('coursename').from('course').where('courseid', '=', req.query.courseId);
    const assignmentDetail = await knex.select('a.assignmentdescription', 'f.filename', 'f.filetype').from('assignments as a')
        .join('course as c', 'c.courseid', 'a.courseid')
        .join('files as f', function () {
            this.on(function () {
                this.on('f.assignmentname', '=', 'a.assignmentname')
                this.andOn('f.courseid', '=', 'a.courseid')
            })
        })
        .where('f.isassignment', '=', 'true')
        .andWhere('c.courseid', '=', req.query.courseId)
        .andWhere('a.assignmentname', '=', req.query.assignmentName);
    const lessons = await knex.select('l.lessonname').from('lesson as l')
        .join('course as c', 'c.courseid', 'l.courseid')
        .where('c.courseid', '=', req.query.courseId)
        .orderBy('l.lessonname', 'asc');
    res.json({
        courseName: courseName[0],
        assignmentDetail: assignmentDetail,
        lessons: lessons,
        user: decode
    })
});

router.get('/AddLesson', async (req, res) => {
    const decode = Token.TokenDecode(req.headers.authorization, req.headers.refreshtoken);
    const courseName = await knex.select('coursename').from('course').where('courseid', '=', req.query.courseId);
    const lessons = await knex.select('l.lessonname').from('lesson as l')
        .join('course as c', 'c.courseid', 'l.courseid')
        .where('c.courseid', '=', req.query.courseId)
        .orderBy('l.lessonname', 'asc');
    res.json({
        courseName: courseName[0],
        lessons: lessons,
        user: decode
    })
});

router.post('/AddLesson', async (req, res) => {
    const existLesson = await knex.select('l.lessonname', 'l.courseid').from('lesson as l')
        .where('l.courseid', '=', req.body.courseId)
        .andWhere('l.lessonname', '=', req.body.lessonName);
    if (existLesson.length == 0) {
        await knex('lesson').insert({ lessonname: req.body.lessonName, courseid: req.body.courseId, lessondescription: req.body.lessonDesc, linkvideo: req.body.lessonLink })
            .then(() => {
                res.json({
                    addMess: 'Add new lesson successfully'
                })
            })
    }
    else {
        res.json({
            addMess: "This lesson name is already exist"
        })
    }
});

module.exports = router;