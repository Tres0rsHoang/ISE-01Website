require('dotenv').config();
const express = require('express');
const app = express();
const bp = require('body-parser')
const TokenManager = require('./middleWare/token');
const AdminRoute = require('./Routes/Admin.Route');
const LecturerRoutes = require('./Routes/Lecturer.Route');
const StudentRoute = require('./Routes/Student.Route')
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

app.use('/Lecturer', LecturerRoutes);

app.use('/Student', StudentRoute);

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