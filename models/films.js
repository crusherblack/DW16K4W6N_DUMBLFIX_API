'use strict';
module.exports = (sequelize, DataTypes) => {
  const films = sequelize.define(
    'films',
    {
      title: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true,
      },
      thumbnailFilm: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true,
      },
      year: {
        type: DataTypes.NUMBER,
        notNull: true,
        notEmpty: true,
      },
      categoryId: {
        type: DataTypes.NUMBER,
      },
      description: {
        type: DataTypes.STRING,
        notNull: true,
        notEmpty: true,
      },
    },
    {}
  );
  films.associate = function (models) {
    films.belongsTo(models.categories, {
      foreignKey: 'categoryId',
      as: 'category',
    });

    films.hasMany(models.episodes, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };
  return films;
};
