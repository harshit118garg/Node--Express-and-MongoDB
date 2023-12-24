require("dotenv").config({ path: "../config.env" });
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

const PORT = process.env.PORT;
const server = express();

// db connection
const CONN_STRING = `${process.env.ATLAS_CLUSTER_DATABASE_CONNECTION_STRING}${process.env.ATLAS_CLUSTER_DB_NAME}`;

main().catch((err) => console.log(err));

async function main() {
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
}

// middleware
server.use(express.json()); // middleware used for sending json/html files [body-parser]
server.use(cors()); // middle ware to avoid cross origin issue issue
server.use(morgan("short")); // middleware used for logging

// middleware used for static file hosting
server.use(express.static(path.resolve(__dirname, "public")));
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public"));
});

// routes middleware
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
