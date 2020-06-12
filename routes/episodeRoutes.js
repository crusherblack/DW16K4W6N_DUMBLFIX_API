const express = require('express');

const router = express.Router();

const episodeController = require('../controllers/episodeController');

router.route('/').post(episodeController.createEpisode);

router.route('/:id').patch(episodeController.updateEpisode).delete(episodeController.deleteEpisode);

module.exports = router;
