const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  class User extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8] // must be at least 8 characters long
        }
      }
    },
    {
      hooks: {
        async beforeCreate(newUser) {
          newUser.password = await bcrypt.hash(newUser.password, 10);
          return newUser;
        },
        async beforeUpdate(updatedUser) {
          updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
          return updatedUser;
        }
      },
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );

  return User;
};
