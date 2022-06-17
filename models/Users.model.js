const Users = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "id",
      },
      user: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "user",
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "password",
      },
      fullName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "fullName",
      },
    },
    {
      tableName: "Users",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );
  return User;
};
module.exports = Users;
