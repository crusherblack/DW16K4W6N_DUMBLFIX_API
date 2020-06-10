const express = require('express');

const router = express.Router();

const userController = require('../controllers/userControllers');

router.route('/').get(userController.getUsers);

router.route('/:id').delete(userController.deleteUser);

module.exports = router;
