require("dotenv").config({ path: "../config.env" });
const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const server = express();
const PORT = process.env.PORT;

const dataFile = JSON.parse(fs.readFileSync("../static/data.json", "utf8"));
const products = dataFile.products;

// middleware
server.use(express.json()); // middleware used for sending json/html files
server.use(morgan("short")); // middleware used for logging
server.use(express.static("public")); // middleware used for static file hosting

// api-endpoints
server.get("/products", (req, res) => {
  res.send(products);
});

server.get("/products/:id", (req, res) => {
  const _id = parseInt(req.params.id);
  const product = products.find((p) => p.id === _id);
  res.json(product);
});

server.post("/products", (req, res) => {
  products.push(req.body);
  res.send(req.body);
});

server.put("/products/:id", (req, res) => {
  const _id = parseInt(req.params.id);
  let productIdx = products.findIndex((p) => p.id === _id);
  products.splice(productIdx, 1, { ...req.body, id: _id });
  res.status(201).json();
});

server.patch("/products/:id", (req, res) => {
  const _id = parseInt(req.params.id);
  let productIdx = products.findIndex((p) => p.id === _id);
  const product = products[productIdx];
  products.splice(productIdx, 1, { ...product, ...req.body });
  res.status(201).json();
});

server.delete("/products/:id", (req, res) => {
  const _id = parseInt(req.params.id);
  let productIdx = products.findIndex((p) => p.id === _id);
  products.splice(productIdx, 1);
  res.status(201).send({ messgae: "product deleted" });
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
