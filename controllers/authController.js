const model = require('../models/index');
const { appError } = require('../utils/appError');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// TODO: Create token
const signToken = async (id) => {
  return await jwt.sign({ id: id }, process.env.JWT_SECRET, {
    // expires in 7 days
    expiresIn: `${7 * 24 * 60 * 60 * 1000}`,
  });
};

// TODO: Create token & send it into cookie & json
const createSendToken = async (user, statusCode, res) => {
  const token = await signToken(user.id);

  const cookieOptions = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV == 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

// TODO: Register
exports.register = async function (req, res, next) {
  try {
    const users = await model.users.create(req.body);
    if (users) {
      createSendToken(users, 201, res);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      'status': 'error',
      'messages': err.message,
    });
  }
};

// TODO: Login
exports.login = async (req, res, next) => {
  // 1) check if email and password are not filled
  if (!req.body.email || !req.body.password) {
    return appError(res, 400, 'Please provide an email & password');
  }

  // 2) get user from database
  const user = await model.users.findOne({
    where: {
      email: req.body.email,
    },
  });
  // 3) check if user not found
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return appError(res, 400, 'Invalid email or password');
  }
  // 4) if user found, sind token
  return createSendToken(user, 200, res);
};

// TODO: Logout
exports.logout = async (req, res, next) => {
  // delete cookie
  res.clearCookie('jwt');

  res.redirect('/login');
};
