const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
// name of db we want to connect to
    process.env.DB_NAME,
// which user we want to connect as
    process.env.DB_USER,
// PW of user we want to connect as
    process.env.DB_PASSWORD,
// configuration object for the database we want to connect to
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize;