'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('tickets', {
    user_id: {
      type: DataTypes.INTEGER,
    },
    topic: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'tickets',
    underscored: true,
    
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

