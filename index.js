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