const express = require("express");
const {
  createProductController,
  getProductController,
  updateProductControler,
  deleteProductControler,
} = require("./controllers");
const {
  createProductValidator,
  updateProductValidator,
  deleteProductValidator,
} = require("./dto");
const productRouter = express.Router();

productRouter.post("/", createProductValidator, createProductController);

productRouter.get("/", getProductController);

productRouter.patch(
  "/:productId",
  updateProductValidator,

  updateProductControler
);
productRouter.delete(
  "/:productId",

  deleteProductValidator,
  deleteProductControler
);

// productRouter.delete("/", deleteProductController);

module.exports = { productRouter };
