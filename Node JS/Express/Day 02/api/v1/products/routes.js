const express = require("express");

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "(GET)Dummy product endpoint!",
  });
});

productsRouter.post("/", (req, res) => {
  res.status(200).json({
    message: "(POST)Dummy product endpoint!",
  });
});

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
