const { Sequelize } = require("sequelize");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT,
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
  }
);
const MySql = {};

fs.readdirSync(path.join(__dirname, "../models/"))
  .filter((file) => file.indexOf(".") !== 0 && file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, "../models/", file))
    MySql[model.name] = model;
  });

Object.keys(MySql).forEach((modelName) => {
  if (MySql[modelName].associate) {
    MySql[modelName].associate(MySql);
  }
});

MySql.sequelize = sequelize;
MySql.Sequelize = Sequelize;
module.exports = MySql;
