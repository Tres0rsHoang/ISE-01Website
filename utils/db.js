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

module.exports = knex;