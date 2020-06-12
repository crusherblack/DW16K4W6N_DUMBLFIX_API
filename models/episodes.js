'use strict';
module.exports = (sequelize, DataTypes) => {
  const episodes = sequelize.define(
    'episodes',
    {
      title: DataTypes.STRING,
      thumbnailEp: DataTypes.STRING,
      linkEp: DataTypes.STRING,
      filmId: DataTypes.NUMBER,
    },
    {}
  );
  episodes.associate = function (models) {
    episodes.belongsTo(models.films, {
      foreignKey: 'filmId',
      as: 'film',
    });
  };
  return episodes;
};
