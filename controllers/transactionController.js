const { transactions: Transaction, users: User } = require('../models/index');
const { appError } = require('../utils/appError');
// const multer = require('multer');

// TODO: Get All Transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'fullName', 'email', 'phone'],
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        transactions,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Get All Transaction
exports.getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        transaction,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Create a New Transaction
exports.createTransaction = async (req, res) => {
  if (req.file) req.body.attachment = req.file.filename;
  try {
    const transaction = await Transaction.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        transaction,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Update Transaction
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        transaction: await Transaction.findByPk(req.params.id),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Delete Transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (transaction > 0) {
      res.status(200).json({
        status: 'success',
        message: `Data has with id: ${req.params.id} been deleted successfully`,
      });
    } else {
      appError(res, 400, `No data matches with your request`);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};
