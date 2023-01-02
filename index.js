const knex = require('knex')({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port : 5432,
        user : 'postgres',
        password : 'bao01932',
        database : 'students_db'
    },
    pool: {min: 0, max: 10}
});
const express = require('express');
const app = express();
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.send('hello from server!')
})

app.listen(5000, () => {
    console.log('App listening on port 5000')
})

app.get('/Admin',async (req, res)=>{
    const StudentCount = await knex('account').count().where('usertype', 3);
    const CourseCount = await knex('course').count();
    const LecturerCount = await knex('account').count().where('usertype', 2);

    res.json({
        StudentCount: StudentCount[0].count,
        CourseCount: CourseCount[0].count,
        LecturerCount: LecturerCount[0].count
    });
});
app.get('/Admin/StudentManagement', async (req, res)=>{
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;
    const List = await knex('account').where('usertype', 3).limit(limit).offset(offset);
    res.json({List: List});
});
app.post('/Admin/AddNewStudent', async (req, res) =>{
    const Exist = await knex('account').count('id').whereRaw('accountusername LIKE ?', [req.body.accountusername]);
    if (Exist[0].count > 0) res.json({mess: 'This user name already have in student list'});
    else {
        await knex('account').insert(req.body);
        res.json({mess: 'Added a new student successfully.'});
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