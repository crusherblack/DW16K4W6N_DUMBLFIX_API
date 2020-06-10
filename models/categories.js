'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    'categories',
    {
      name: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true,
      },
    },
    {}
  );
  categories.associate = function (models) {
    categories.hasMany(models.films);
  };
  return categories;
};
