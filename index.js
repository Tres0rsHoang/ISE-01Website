require('dotenv').config();
const express = require('express');
const app = express();
const bp = require('body-parser')
const TokenManager = require('./middleWare/token');
const AdminRoute = require('./Routes/Admin.Route');
const knex = require('./utils/db');

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

let accountLogin = [];

app.get('/', (req, res) => {
    res.send('hello from server!')
})

app.listen(5000, () => {
    console.log('App listening on port 5000')
})

app.use('/Admin', AdminRoute);

app.post('/login', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const accountList = await knex('account').whereRaw('accountusername LIKE ? and accountpassword LIKE ?', [username, password]);
    if (accountList.length === 0) return res.json({mess:'Fail'});
    else {
        const account = accountList[0];
        const Token = TokenManager.generateToken(account);
        accountLogin.push({user: account.id,Token: Token})
        res.json({Token: Token, mess: 'Success', user: account});
    }
});

app.get('/Lecturer', async (req, res) => {
    const CourseCount = await knex('course').count().where('lecturerid', req.query.userId);
    res.json({
        CourseCount: CourseCount[0].count,
    });
});


app.get('/Lecturer/Courses', async (req, res) => {
    const listCourse = await knex.select('c.coursename', 'a.fullname').from('course as c')
                    .join('account as a', 'a.id', 'c.lecturerid')
                    .where('lecturerid', req.query.userId);
    res.json({
        list: listCourse
    })
});

app.get('/Lecturer/CourseDetail', async (req, res) => {
    // res.json({
    //     userId: req.query.userId,
    //     courseId: req.query.courseId,
    //     lessonName: req.query.lessonName
    // })
    const courseDetail = await knex.select('c.coursename', 'a.fullname', 'l.lessonname', 'l.lessondescription').from('course as c')
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