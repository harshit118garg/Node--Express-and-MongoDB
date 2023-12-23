const fs = require("fs");

const dataFile = JSON.parse(fs.readFileSync("../static/data.json", "utf8"));
const products = dataFile.products;

exports.getAllProducts = (req, res) => {
  res.send(products);
};

exports.getSingleProduct = (req, res) => {
  const _id = parseInt(req.params.id);
  const product = products.find((p) => p.id === _id);
  res.json(product);
};

exports.createNewProduct = (req, res) => {
  products.push(req.body);
  res.send(req.body);
};

exports.putSingleProduct = (req, res) => {
  const _id = parseInt(req.params.id);
  let productIdx = products.findIndex((p) => p.id === _id);
  products.splice(productIdx, 1, { ...req.body, id: _id });
  res.status(201).json();
};

exports.patchProduct = (req, res) => {
  const _id = parseInt(req.params.id);
  let productIdx = products.findIndex((p) => p.id === _id);
  const product = products[productIdx];
  products.splice(productIdx, 1, { ...product, ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const _id = parseInt(req.params.id);
  let productIdx = products.findIndex((p) => p.id === _id);
  products.splice(productIdx, 1);
  res.status(201).send({ messgae: "product deleted" });
};
