const express = require('express');

const router = express.Router();

const userController = require('../controllers/userControllers');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(authController.protect, authController.allowTo('admin'), userController.getUsers);

router.route('/:id').delete(userController.deleteUser);

module.exports = router;
