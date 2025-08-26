const express = require("express");
const {
  createProductController,
  getProductController,
  updateProductController,
  deleteProductController,
} = require("./controllers");
const { validateProductForCreation } = require("./dto");

const productsRouter = express.Router();

productsRouter.get("/", getProductController);

productsRouter.post("/", validateProductForCreation, createProductController);

productsRouter.patch("/:productId", updateProductController);

productsRouter.delete("/:productId", deleteProductController);

module.exports = { productsRouter };
