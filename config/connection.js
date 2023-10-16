// Import necessary packages
const Sequelize = require('sequelize');

// Import database name, username, and password from config.json
const { database, username, password, host, dialect } = require('../configuration.json').development;

// Set up Sequelize to connect to the database
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port: 3306,
  logging: false,  // Prevent logging of database queries in the console
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Export the sequelize object
module.exports = sequelize;
