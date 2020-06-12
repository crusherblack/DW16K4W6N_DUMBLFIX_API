const { films: Film, categories: Category, episodes: Episode } = require('../models/index');
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
    res.status(400).json({
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
    res.status(400).json({
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
    res.status(400).json({
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
          film: await Film.findByPk(req.params.id),
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
        message: `Data has with id: ${req.params.id} been deleted successfully`,
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

// TODO: Get Episodes by Film
exports.getEpisodesByFilm = async (req, res) => {
  try {
    const episodesByFilm = await Film.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Episode,
          as: 'episodes',
          attributes: ['id', 'title', 'thumbnailEp', 'linkEp'],
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        film: episodesByFilm,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Get Episode by Film
exports.getEpisodeByFilm = async (req, res) => {
  try {
    const episodesByFilm = await Episode.findOne({
      where: {
        id: req.params.idEp,
      },
      include: [
        {
          model: Film,
          as: 'film',
          attributes: ['id', 'title', 'thumbnailFilm', 'year', 'categoryId', 'description'],
          where: {
            id: req.params.idFilm,
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        episode: episodesByFilm,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};
