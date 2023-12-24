const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: {
    type: Number,
    min: [0, "wrong price"],
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [50, "wrong max discount"],
    required: true,
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
    required: true,
  },
  stock: Number,
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

exports.Product = model(
  `${process.env.ATLAS_CLUSTER_DB_COLLECTION_NAME}`,
  productSchema
);
