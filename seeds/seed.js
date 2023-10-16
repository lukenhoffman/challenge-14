const sequelize = require('./config/connection');
const { User, Post, Comment } = require('./models');

const userData = require('./seeds/userData.json');
const postData = require('./seeds/postData.json');
const commentData = require('./seeds/commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true }); // force: true will drop the database every time the function runs
  
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    
    await Post.bulkCreate(postData);
    
    await Comment.bulkCreate(commentData);
    
    process.exit(0);
};

seedDatabase();
