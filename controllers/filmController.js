const { films: Film, categories: Category } = require('../models/index');

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
    const films = await Film.findOne({
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
