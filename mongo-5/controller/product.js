const ProductModel = require("../models/productSchema");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.Product.find();
    res.json(products);
    console.log("products fetched");
  } catch (error) {
    console.log("error in getting info of all products", error);
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await ProductModel.Product.findById(_id);
    res.json(product);
    console.log("product fetched");
  } catch (error) {
    console.log("error in getting info of the ptoduct", error);
  }
};

exports.createNewProduct = async (req, res) => {
  try {
    const newProduct = new ProductModel.Product(req.body);
    await newProduct
      .save()
      .then(() => {
        res.status(201).json({ message: "object saved in database" });
        console.log("object saved in database");
      })
      .catch((err) => {
        res.status(400).json({ error: `something is missing ${err}` });
        console.log("error occured in saving to database", err);
      });
  } catch (error) {
    console.log("error in creating new product", error);
  }
};

exports.putSingleProduct = async (req, res) => {
  try {
    await ProductModel.Product.findOneAndReplace(
      { _id: req.params.id },
      req.body
    )
      .then((product) => {
        res.status(201).json(product);
        console.log("object replaces successfully");
      })
      .catch((err) => {
        res.status(400).json({
          message: "error occured in replcing the product to database",
        });
        console.log("error occured in replcing the product to database", err);
      });
  } catch (error) {
    console.log("error in replacing the product", error);
  }
};

exports.patchProduct = async (req, res) => {
  try {
    await ProductModel.Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
      .then((updatedProduct) => {
        res.status(201).json(updatedProduct);
        console.log("object updated successfully");
      })
      .catch((err) => {
        res.status(400).json({
          message: "error occured in updating the product to database",
        });
        console.log("error occured in updating the product to database", err);
      });
  } catch (error) {
    console.log("error in updating the product", error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await ProductModel.Product.findByIdAndDelete({ _id: req.params.id })
      .then((deletedProduct) => {
        res.status(201).json(deletedProduct);
        console.log("object deleted successfully");
      })
      .catch((err) => {
        res.status(400).json({
          message: "error occured in deleting the product to database",
        });
        console.log("error occured in deleting the product to database", err);
      });
  } catch (error) {
    console.log("error in deleting the product", error);
  }
};
