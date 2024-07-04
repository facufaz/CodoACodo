const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'movies_db'
});

connection.connect((err) => {
    if (err) {
        console.log('ERROR CONECTANDO CON LA DATABASE:', err);
    } else {
        console.log('CONECTADO CON LA DATABASE');
    }
});

module.exports = connection;