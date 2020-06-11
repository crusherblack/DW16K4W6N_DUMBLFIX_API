const { films: Film, categories: Category } = require('../models/index');
const { appError } = require('../utils/appError');

// TODO: Get All Films
exports.getFilms = async (req, res) => {
  try {
    const films = await Film.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        films,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Get All Film
exports.getFilm = async (req, res) => {
  try {
    const film = await Film.findOne({
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
        film,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Create a New Film
exports.createFilm = async (req, res) => {
  try {
    const film = await Film.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        film,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Update Category
exports.updateFilm = async (req, res) => {
  try {
    const film = await Film.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (film > 0) {
      res.status(200).json({
        status: 'success',
        data: {
          film: {
            id: req.params.id,
            ...req.body,
          },
        },
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

// TODO: Delete User
exports.deleteFilm = async (req, res) => {
  try {
    const film = await Film.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (film > 0) {
      res.status(200).json({
        status: 'success',
        message: 'Data has been deleted successfully',
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
