const { films: Film, episodes: Episode } = require('../models/index');
const { appError } = require('../utils/appError');

// TODO: Create a New Episode
exports.createEpisode = async (req, res) => {
  try {
    const episode = await Episode.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        episode,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// TODO: Update Episode
exports.updateEpisode = async (req, res) => {
  try {
    const episode = await Episode.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (episode > 0) {
      res.status(200).json({
        status: 'success',
        data: {
          episode: await Episode.findByPk(req.params.id),
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

// TODO: Delete Episode
exports.deleteEpisode = async (req, res) => {
  try {
    const episode = await Episode.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (episode > 0) {
      res.status(200).json({
        status: 'success',
        message: `Data with id: ${req.params.id} has been deleted successfully`,
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
