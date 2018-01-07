'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('orders', {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    randominfo: {
      type: DataTypes.BOOLEAN,
    },
    password: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    file: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'orders',
    underscored: true,
    
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

