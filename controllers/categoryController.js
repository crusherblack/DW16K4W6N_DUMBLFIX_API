const model = require('../models/index');

// TODO: Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await model.categories.findAll();
    res.status(200).json({
      status: 'success',
      data: {
        categories,
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
