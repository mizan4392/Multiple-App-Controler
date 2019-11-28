const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'multipleappcontroler'
})

db.connect();


db.on('connect',() => console.log('Db connected'))
db.on('error',(error) => console.log(error))

module.exports = db;