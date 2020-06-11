const express = require('express');

const router = express.Router();

const filmController = require('../controllers/filmController');

router.route('/').get(filmController.getFilms).post(filmController.createFilm);

router
  .route('/:id')
  .get(filmController.getFilm)
  .patch(filmController.updateFilm)
  .delete(filmController.deleteFilm);

module.exports = router;
