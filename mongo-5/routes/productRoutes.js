const express = require("express");
const {
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
  .get("/:id", getSingleProduct)
  .post("/", createNewProduct)
  .put("/:id", putSingleProduct)
  .patch("/:id", patchProduct)
  .delete("/:id", deleteProduct);

exports.router = router;
