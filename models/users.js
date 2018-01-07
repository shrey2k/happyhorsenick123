'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
    },
    encrypted_password: {
      type: DataTypes.STRING,
    },
    reset_password_token: {
      type: DataTypes.STRING,
    },
    reset_password_sent_at: {
      type: DataTypes.DATE,
    },
    remember_created_at: {
      type: DataTypes.DATE,
    },
    sign_in_count: {
      type: DataTypes.INTEGER,
    },
    current_sign_in_at: {
      type: DataTypes.DATE,
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
    },
    current_sign_in_ip: {
      type: DataTypes.STRING,
    },
    last_sign_in_ip: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    handle: {
      type: DataTypes.STRING,
    },
    provider: {
      type: DataTypes.STRING,
    },
    uid: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'users',
    underscored: true,
    
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};

