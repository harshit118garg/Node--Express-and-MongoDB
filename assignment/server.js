require("dotenv").config({ path: "./config.env" });
const express = require("express");
const morgan = require("morgan");
const conn = require("./db/conn");
const Handlebars = require("handlebars");
const { engine } = require("express-handlebars");
const taskRouter = require("./routes/taskRouter");

const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const PORT = process.env.PORT;
const server = express();

// middlewares
server.use(express.json());
server.use(express.urlencoded());
server.use(morgan("short"));
server.use(express.static("public"));

server.engine(
  "handlebars",
  engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
server.set("view engine", "handlebars");
server.set("views", "./public");

// router
server.use("/", taskRouter.router);

// db connection
conn();

server.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
