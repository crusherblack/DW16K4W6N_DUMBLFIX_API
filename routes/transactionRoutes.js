const express = require('express');

const router = express.Router();

const transactionController = require('../controllers/transactionController');
const { protect, allowTo } = require('../controllers/authController');

router
  .route('/')
  .get(transactionController.getTransactions)
  .post(protect, transactionController.createTransaction);

router
  .route('/:id')
  .get(transactionController.getTransaction)
  .patch(protect, transactionController.updateTransaction)
  .delete(protect, transactionController.deleteTransaction);

module.exports = router;
