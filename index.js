const express = require("express");
const app = express();
const http = require("http");
const router = require("./router/index");
const MysqlConecction = require("./database/database.mysql");
require("dotenv").config();
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDOcs = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Reto Backend Solera",
      version: "1.0",
    },
    servers: [
      {
        url: `${process.env.URL}`,
      },
    ],
  },
  apis: [`${path.join(__dirname, "swagger.config.js")}`],
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);
app.use(
  "/solera-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDOcs(swaggerSpec))
);

const server = http.createServer(app);
const main = async () => {
  try {
    await MysqlConecction.sequelize.authenticate();
    server.listen(parseInt(process.env.PORT_APP));
    console.log("Server - Puerto :" + process.env.PORT_APP);
  } catch (error) {
    console.log("ERROR:" + error);
  }
};
main();
module.exports = server;
