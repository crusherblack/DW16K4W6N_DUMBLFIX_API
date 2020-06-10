'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      phone: {
        type: DataTypes.STRING,
        validate: {
          isNumeric: true,
        },
      },
      address: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        isIn: [['user', 'admin']],
      },
      subscribe: DataTypes.BOOLEAN,
    },
    {
      hooks: {
        beforeCreate: async function (user) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        },
      },
    }
  );
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
