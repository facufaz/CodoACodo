const express = require('express')
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get("/", movieController.getAllMovies);
router.get("/:id", movieController.getMoviebyId);
router.create("/", movieController.createMovie);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);