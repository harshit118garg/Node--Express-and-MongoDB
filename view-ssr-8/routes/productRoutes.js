const express = require("express");
const {
  getAllProductsSSR,
  createNewProductSSR,
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  putSingleProduct,
  patchProduct,
  deleteProduct,
} = require("../controller/product");

const router = express.Router();

router
  .get("/", getAllProducts)
  .get("/ssr", getAllProductsSSR)
  .get("/addssr", createNewProductSSR)
  .get("/:id", getSingleProduct)
  .post("/", createNewProduct)
  .put("/:id", putSingleProduct)
  .patch("/:id", patchProduct)
  .delete("/:id", deleteProduct);

exports.router = router;
