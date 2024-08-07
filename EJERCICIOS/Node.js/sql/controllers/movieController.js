// controllers/movieController.js
const db = require('../db/db');

const getAllMovies = (req, res) => {
    const sql = 'SELECT * FROM movies';

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getMovieById = (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM movies WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const createMovie = (req, res) => {
    const {title, year, views} = req.body;
    const sql = 'INSERT INTO movies (title, year, views) Values ( ?, ?, ?)';

    db.query(sql, [title, year, views], (err, results) => {
        if (err) throw err;
        res.status(201).json({ message: 'Movie Created', movieId: results.insertId });
    });
};


const updateMovie = (req, res) => {
    const sql = 'UPDATE movies SET ? WHERE id = ?';
    const id = req.params.id;
    const updatedMovie = req.body;

    db.query(sql, [updatedMovie, id], (err, results) => {
        if (err) throw err;
        res.json({ id, ...updatedMovie });
    });
};

const deleteMovie = (req, res) => {
    const sql = 'DELETE FROM movies WHERE id = ?';
    const id = req.params.id;

    db.query(sql, [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Movie deleted successfully' });
    });
};

module.exports = {
    getAllMovies,
    createData,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};