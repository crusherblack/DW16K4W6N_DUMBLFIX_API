const express = require('express');

const router = express.Router();

const transactionController = require('../controllers/transactionController');
const { protect, allowTo } = require('../controllers/authController');
const { uploadSingle } = require('../utils/uploadImage');

router
  .route('/')
  .get(transactionController.getTransactions)
  .post(
    protect,
    uploadSingle('transaction', 'attachment'),
    transactionController.createTransaction
  );

router
  .route('/:id')
  .get(transactionController.getTransaction)
  .patch(protect, transactionController.updateTransaction)
  .delete(protect, transactionController.deleteTransaction);

module.exports = router;
