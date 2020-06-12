'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define(
    'transactions',
    {
      startDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      dueDate: DataTypes.DATE,
      userId: DataTypes.NUMBER,
      attachment: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {}
  );
  transactions.associate = function (models) {
    transactions.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });
  };
  return transactions;
};
