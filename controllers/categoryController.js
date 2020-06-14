const { categories: Category, films: Film } = require('../models/index');
const { appError } = require('../utils/appError');

// TODO: Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({
      status: 'success',
      data: {
        categories,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Create Category
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        category,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Update Category
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (category > 0) {
      res.status(200).json({
        status: 'success',
        data: {
          category: {
            id: req.params.id,
            name: req.body.name,
          },
        },
      });
    } else {
      appError(res, 400, `No data matches with your request`);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (category > 0) {
      res.status(200).json({
        status: 'success',
        message: `Data with id: ${req.params.id} has been deleted successfully`,
      });
    } else {
      appError(res, 400, `No data matches with your request`);
    }
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Get Films by Category
exports.getFilmsByCategory = async (req, res) => {
  try {
    const filmsByCategory = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Film,
          as: 'films',
          attributes: ['id', 'title', 'thumbnailFilm', 'year', 'description'],
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        category: filmsByCategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};
