const express = require('express');

const router = express.Router();

const filmController = require('../controllers/filmController');

router.route('/').get(filmController.getFilms).post(filmController.createFilm);

router
  .route('/:id')
  .get(filmController.getFilm)
  .patch(filmController.updateFilm)
  .delete(filmController.deleteFilm);

router.route('/:id/episodes').get(filmController.getEpisodesByFilm);
router.route('/:idFilm/episodes/:idEp').get(filmController.getEpisodeByFilm);

module.exports = router;
