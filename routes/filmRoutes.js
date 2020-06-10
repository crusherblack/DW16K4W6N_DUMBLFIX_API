const express = require('express');

const router = express.Router();

const filmController = require('../controllers/filmController');

router.route('/').get(filmController.getFilms);

module.exports = router;
