const model = require('../models/index');

exports.getUsers = async (req, res) => {
  try {
    const users = await model.users.findAll();
    res.status(200).json({
      status: 'success',
      data: {
        users,
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

exports.deleteUser = async (req, res) => {
  try {
    const users = await model.users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        id: req.params.id,
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
