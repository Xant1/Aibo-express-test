const { Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

const post = sequelize.define('post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  population: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = post;
