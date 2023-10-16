// Import required packages
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');  // Importing Sequelize connection
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with Sequelize
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middlewares to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Import individual route files
const homeRoutes = require('./controllers/homeRoutes');
const userRoutes = require('./controllers/api/userRoutes');
const postRoutes = require('./controllers/api/postRoutes');
const commentRoutes = require('./controllers/api/commentRoutes');
// Additional route imports as needed

// Use routes with respective path prefixes
app.use('/', homeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes)
// Additional route uses as needed

// Sync Sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
