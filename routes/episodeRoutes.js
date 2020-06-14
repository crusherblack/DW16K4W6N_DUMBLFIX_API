const express = require('express');

const router = express.Router();

const episodeController = require('../controllers/episodeController');
const { protect, allowTo } = require('../controllers/authController');
const { uploadSingle } = require('../utils/uploadImage');

router
  .route('/')
  .post(
    protect,
    allowTo('admin'),
    uploadSingle('episode', 'thumbnailEp'),
    episodeController.createEpisode
  );

router
  .route('/:id')
  .patch(protect, allowTo('admin'), episodeController.updateEpisode)
  .delete(protect, allowTo('admin'), episodeController.deleteEpisode);

module.exports = router;
