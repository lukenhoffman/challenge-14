const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Post extends Model {}

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255] // must be between 1 and 255 characters long
        }
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1] // must be at least 1 character long
        }
      },
      userId: {  // Foreign Key to associate a Post with a User
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      }
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'post',
    }
  );

  return Post;
};
