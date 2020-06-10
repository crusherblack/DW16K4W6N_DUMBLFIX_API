const model = require('../models/index');

// TODO: Get All Films
exports.getFilms = async (req, res) => {
  try {
    const films = await model.films.findAll({
      include: [
        {
          model: model.categories,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });
    res.status(200).json({
      status: 'success',
      data: {
        films,
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
