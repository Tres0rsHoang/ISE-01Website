const express = require('express');
const router = express.Router();
const Token = require('../middleWare/token')
const knex = require('../utils/db');

router.get('/',  async (req, res, next)=>{
    const decode = Token.TokenDecode(req.headers.authorization);
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
router.get('/StudentManagement', async (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization);
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;
    const List = await knex('account').where('usertype', 3).limit(limit).offset(offset)
    res.json({List: List, user: decode});
});
router.post('/AddNewStudent', async (req, res) =>{
    const Exist = await knex('account').count('id').whereRaw('accountusername LIKE ?', [req.body.accountusername]);
    if (Exist[0].count > 0) res.json({mess: 'This user name already have in student list'});
    else {
        await knex('account').insert(req.body);
        res.json({mess: 'Added a new student successfully.'});
    }
});
router.get('/AddNewStudent', (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization);
    res.json({user: decode});
})
router.get('/CourseManagement', async (req, res)=>{
    const decode = Token.TokenDecode(req.headers.authorization);
    const page = req.query.page || 1;
    const limit = 20;
    const offset = (page-1) * limit;
    const List = await knex('course').limit(limit).offset(offset)
    res.json({List: List, user: decode});
});

module.exports = router;