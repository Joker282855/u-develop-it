const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Coderrocks12!',
    database: 'election'
},
    console.log('Connected to the database')
);

module.exports = db;