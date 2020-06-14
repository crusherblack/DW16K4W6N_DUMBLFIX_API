const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');
const { protect, allowTo } = require('../controllers/authController');

router
  .route('/')
  .get(categoryController.getCategories)
  .post(protect, allowTo('admin'), categoryController.createCategory);

router
  .route('/:id')
  .patch(protect, allowTo('admin'), categoryController.updateCategory)
  .delete(protect, allowTo('admin'), categoryController.deleteCategory);

router.route('/:id/films').get(categoryController.getFilmsByCategory);

module.exports = router;
