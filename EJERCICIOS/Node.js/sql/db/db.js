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
      return
    } 
        console.log('CONECTADO CON LA DATABASE');
    
        
        connection.query('CREATE DATABASE IF NOT EXISTS movies_db', (err, results) => {
            if(err) console.log('ERROR CREATING DATABASE:', err)
                console.log("DATABASE ENSURED")
            connection.changeUser({database: "movies_db"}, (err, results) => {
                if (err) console.log("ERROR SWITCHING TO movies_db:", err)
                    
                    const createTableQuery = `
                    CREATE TABLE IF NOT EXISTS movies(
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        title VARCHAR( 255 ) NOT NULL,
                        director VARCHAR( 255 ) NOT NULL,
                        year INT NOT NULL
                        );`
                        
                        connection.query(createTableQuery, (err,results) => {
                            if(err) console.log('ERROR CREATING TABLE:', err)
                                console.log("TABLE ENSURED.")
                        })
                    })
                })
                
            });
                module.exports = connection;