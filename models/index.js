const Sequelize = require('sequelize');
const config = require('../configuration.json');

const sequelize = new Sequelize(
  process.env[config.use_env_variable] || config.database,
  config.username,
  config.password,
  config
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.posts = require('./post.js')(sequelize, Sequelize);
db.users = require('./user.js')(sequelize, Sequelize);
db.comments = require('./comment.js')(sequelize, Sequelize);

// Associations
db.users.hasMany(db.posts);
db.posts.belongsTo(db.users);

db.posts.hasMany(db.comments);
db.comments.belongsTo(db.posts);

db.users.hasMany(db.comments);
db.comments.belongsTo(db.users);

module.exports = db;
