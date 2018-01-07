'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('coupons', {
    name: {
      type: DataTypes.STRING,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'coupons',
    underscored: true,
    
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

