const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    min: 1,
  },
  description: String,
  quantity: {
    type: Number,
    default: 1,
  },
});

const productModel = model("product", productSchema);

module.exports = { productModel };
