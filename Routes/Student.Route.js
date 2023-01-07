const express = require('express');
const router = express.Router();
const Token = require('../middleWare/token')
const knex = require('../utils/db');

// select c.coursename, a.fullname from account as a join course as c on a.id = c.lecturerid
// join register r on r.courseid = c.courseid
router.get('/', async (req, res) => {
    const listCourse = await knex.select('c.coursename', 'a.fullname', 'c.courseid').from('course as c')
        .join('account as a', 'a.id', 'c.lecturerid').join('register as r', 'r.courseid', 'c.courseid')
        .where('studentid', req.query.userId);
    res.json({
        list: listCourse
    })
});

// select c.coursename, a.fullname, l.lessonname, l.lessondescription, l.linkvideo
// from account as a join course as c on a.id = c.lecturerid
// join lesson as l on l.courseid = c.courseid
// join register r on r.courseid = c.courseid

router.get('/CourseDetail', async (req, res) => {
    const courseDetail = await knex.select('c.coursename', 'c.courseid', 'a.fullname', 'l.lessonname', 'l.lessondescription', 'l.linkvideo').from('course as c')
        .join('account as a', 'a.id', 'c.lecturerid')
        .join('lesson as l', 'l.courseid', 'c.courseid')
        .join('register as r', 'r.courseid', 'c.courseid')
        // .where('c.lecturerid', '=', req.query.userId)
        .andWhere('c.courseid', '=', req.query.courseId)
        .andWhereLike('l.lessonname', req.query.lessonName + '%')
    const lessons = await knex.select('l.lessonname').from('lesson as l')
        .join('course as c', 'c.courseid', 'l.courseid')
        .where('c.courseid', '=', req.query.courseId)
        .orderBy('l.lessonname', 'asc');
    res.json({
        courseDetail: courseDetail[0],
        lessons: lessons
    })
   
});


router.get('/CourseAssignments', async (req, res) => {
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
        lessons: lessons
    })
});

router.get('/AssignmentDetail', async (req, res) => {
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
        lessons: lessons
    })
});

module.exports = router;
