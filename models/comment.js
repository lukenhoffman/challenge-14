const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Comment extends Model {}

  Comment.init(
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255] // ensures the comment is not empty and doesn't exceed 255 characters
        }
      },
      userId: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        }
      },
      postId: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id',
        }
      }
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
  );

  return Comment;
};
