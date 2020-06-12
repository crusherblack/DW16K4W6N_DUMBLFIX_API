const express = require('express');

const router = express.Router();

const filmController = require('../controllers/filmController');
const { protect, allowTo } = require('../controllers/authController');

router
  .route('/')
  .get(filmController.getFilms)
  .post(protect, allowTo('admin'), filmController.createFilm);

router
  .route('/:id')
  .get(filmController.getFilm)
  .patch(protect, allowTo('admin'), filmController.updateFilm)
  .delete(protect, allowTo('admin'), filmController.deleteFilm);

router.route('/:id/episodes').get(filmController.getEpisodesByFilm);
router.route('/:idFilm/episodes/:idEp').get(filmController.getEpisodeByFilm);

module.exports = router;
