const express = require('express')
const router = express.Router();

let movies = [
    {id:1, title: 'El secreto de sus ojos', director:'Juan Jose Campanella', year:2009},
    {id:2, title: 'Relatos Salvajes', director:'Damian Szifron', year:2014},
    {id:3, title: 'Nueve Reinas', director:'Fabian Bielinsky', year:2000},
    {id:4, title: 'La historia oficial', director:'Luiz Puenzo', year:1985}
]

router.get('/',(req, res) => {
    res.json(movies)
})
module.exports = router

router.get('/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id))
    if(!movies) return res.status(404).send('Movie not Found')

    res.json(movie)
})