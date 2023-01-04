
require('dotenv').config();
const express = require('express');
const app = express();
const bp = require('body-parser')
const jwt = require('jsonwebtoken');
const knex = require('knex')({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port : 5432,
        user : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASS,
        database : 'students_db'
    },
    pool: {min: 0, max: 10}
});
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

let accountLogin = [];

function generateToken(payload){
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '1h'
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
    return {accessToken, refreshToken}
}
function TokenDecode(accessToken){
    try {
        return jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    }
    catch (error){
        if (error instanceof jwt.TokenExpiredError){
            console.log('Ok');
        }
        return null;
    }
}

app.get('/', (req, res) => {
    res.send('hello from server!')
})

app.listen(5000, () => {
    console.log('App listening on port 5000')
})

app.get('/Admin',  async (req, res, next)=>{
    const decode = TokenDecode(req.headers.authorization);
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


app.get('/Admin/StudentManagement', async (req, res)=>{
    const decode = TokenDecode(req.headers.authorization);
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;
    const List = await knex('account').where('usertype', 3).limit(limit).offset(offset)
    res.json({List: List, user: decode});
});
app.post('/Admin/AddNewStudent', async (req, res) =>{
    const Exist = await knex('account').count('id').whereRaw('accountusername LIKE ?', [req.body.accountusername]);
    if (Exist[0].count > 0) res.json({mess: 'This user name already have in student list'});
    else {
        await knex('account').insert(req.body);
        res.json({mess: 'Added a new student successfully.'});
    }
});
app.get('/Admin/AddNewStudent', (req, res)=>{
    const decode = TokenDecode(req.headers.authorization);
    res.json({user: decode});
})

app.get('/Admin/CourseManagement', async (req, res)=>{
    const decode = TokenDecode(req.headers.authorization);
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;
    const List = await knex('course').limit(limit).offset(offset)
    res.json({List: List, user: decode});
});



app.post('/login', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const accountList = await knex('account').whereRaw('accountusername LIKE ? and accountpassword LIKE ?', [username, password]);
    if (accountList.length === 0) return res.json({mess:'Fail'});
    else {
        const account = accountList[0];
        const Token = generateToken(account);
        accountLogin.push({user: account.id,refreshToken: Token.refreshToken})
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