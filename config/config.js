require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: "postgres", //process.env.DB_USERNAME,
    password: "db", //process.env.DB_PASSWORD,
    database: "quest", //process.env.DB_DATABASE,
    host: "localhost", //process.env.DB_HOST,
    dialect: "postgres"
    // dialectOptions: {
    //   ssl: true
    // }
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
