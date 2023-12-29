const mongoose = require("mongoose");

const DB_CONN_STRING = process.env.COMPASS_TEST_DATABASE_CONNECTION_STRING;
const DB_NAME = process.env.COMPASS_TEST_DATABASE;
const CONN_STRING = `${DB_CONN_STRING}${DB_NAME}`;

const conn = async () => {
  try {
    await mongoose
      .connect(CONN_STRING)
      .then(() => {
        console.log("DB Connection Successfull.... :)");
      })
      .catch((err) => {
        console.log("error has occured", err);
      });
  } catch (error) {
    console.log("error in connecting to database", error);
  }
};

module.exports = conn;
