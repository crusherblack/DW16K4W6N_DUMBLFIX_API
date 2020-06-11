const express = require('express');

const router = express.Router();

const filmController = require('../controllers/filmController');

router.route('/').get(filmController.getFilms);

router.route('/:id').get(filmController.getFilm);

module.exports = router;
