'use strict';
const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          arga: [1,99],
          msg: 'Name must be between 1 and 99 characters'
        }
      }
    },
    email: {
      DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email'
        }
      }
     }, 
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          arga: [12,99],
          msg:  'Must be 12 characters'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};