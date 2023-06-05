const {Sequelize} = require('sequelize');
const sequelize = require('../config/connection');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.post = require('./postModel')

module.exports = db;