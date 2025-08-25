const express = require("express");
const {
  createProductController,
  getProductController,
} = require("./controllers");
const { validateProductForCreation } = require("./dto");

const productsRouter = express.Router();

productsRouter.get("/", getProductController);

productsRouter.post("/", validateProductForCreation, createProductController);

productsRouter.patch("/:productId", (req, res) => {
  res.status(200).json({
    message: "(PATCH)Dummy product endpoint!",
  });
});

productsRouter.delete("/:productId", (req, res) => {
  res.status(200).json({
    message: "(DELETE)Dummy product endpoint!",
  });
});

module.exports = { productsRouter };
