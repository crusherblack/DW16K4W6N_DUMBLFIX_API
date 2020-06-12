'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      fullName: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true,
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true,
        min: 6,
      },
      gender: {
        type: DataTypes.STRING,
        isIn: [['male', 'female']],
      },
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
    users.hasMany(models.transactions);
  };
  return users;
};
