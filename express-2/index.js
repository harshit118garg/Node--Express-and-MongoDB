require("dotenv").config({ path: "../config.env" });
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");

const PORT = process.env.PORT;

const htmlFile = fs.readFileSync("public/index.html", "utf8");
const dataFile = JSON.parse(fs.readFileSync("../static/data.json", "utf8"));
const products = dataFile.products;

const server = express();

// middleware
server.use(express.json()); // middleware used for sending json/html files
server.use(morgan("tiny")); // middleware used for logging
server.use(express.static("public")); // middleware used for static file hosting

const auth = (req, res, next) => {
  if (req.body.password === "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// end-points
server.get("/", (req, res) => {
  res.send("hello");
});

server.post("/", auth, (req, res) => {
  res.send("hello");
});

server.get("/products", (req, res) => {
  res.json(products);
});

server.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.json(products[id]);
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
