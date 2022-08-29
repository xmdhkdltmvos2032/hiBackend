const mysql = require("mysql");

let db = mysql.createConnection({
    host:process.env.DB_HOST,
    database:process.env.DB_DATEBASE,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
})

db.connect();

module.exports = db;