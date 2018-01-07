'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('replies', {
    ticket_id: {
      type: DataTypes.INTEGER,
    },
    body: {
      type: DataTypes.STRING,
    },
    from: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'replies',
    underscored: true,
    
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

