const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(categoryController.getCategories)
  .post(authController.protect, categoryController.createCategory);

router
  .route('/:id')
  .patch(categoryController.updateCategory)
  .delete(authController.protect, categoryController.deleteCategory);

module.exports = router;
