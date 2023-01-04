const express = require('express');
const router = express.Router();
const Token = require('../middleWare/token')
const knex = require('../utils/db');

router.get('/', async (req, res) => {
    const CourseCount = await knex('course').count().where('lecturerid', req.query.userId);
    res.json({
        CourseCount: CourseCount[0].count,
    });
});

router.get('/Courses', async (req, res) => {
    const listCourse = await knex.select('c.coursename', 'c.courseid', 'a.fullname').from('course as c')
                    .join('account as a', 'a.id', 'c.lecturerid')
                    .where('lecturerid', req.query.userId);
    res.json({
        list: listCourse
    })
});

router.get('/CourseDetail', async (req, res) => {
    // res.json({
    //     userId: req.query.userId,
    //     courseId: req.query.courseId,
    //     lessonName: req.query.lessonName
    // })
    const courseDetail = await knex.select('c.coursename', 'a.fullname', 'l.lessonname', 'l.lessondescription', 'l.linkvideo').from('course as c')
                                            .join('account as a', 'a.id', 'c.lecturerid')
                                            .join('lesson as l', 'l.courseid', 'c.courseid')
                                            .where('c.lecturerid', '=', req.query.userId)
                                            .andWhere('c.courseid', '=', req.query.courseId)
                                            .andWhereLike('l.lessonname', req.query.lessonName+'%')
                                            // .andWhere('l.lessonname', '=', req.query.lessonName)
    const lessons = await knex.select('l.lessonname').from('lesson as l')
                              .join('course as c', 'c.courseid', 'l.courseid')
                              .where('c.courseid', '=', req.query.courseId)
                              .orderBy('l.lessonname', 'asc');
    res.json({
        courseDetail: courseDetail[0],
        lessons: lessons
    })
});

module.exports = router;