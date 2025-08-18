const express = require("express");

const ordersRouter = express.Router();

ordersRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "(GET)Dummy order endpoint!",
  });
});

ordersRouter.post("/", (req, res) => {
  res.status(200).json({
    message: "(POST)Dummy order endpoint!",
  });
});

ordersRouter.patch("/:orderId", (req, res) => {
  res.status(200).json({
    message: "(PATCH)Dummy order endpoint!",
  });
});

ordersRouter.delete("/:orderId", (req, res) => {
  res.status(200).json({
    message: "(DELETE)Dummy order endpoint!",
  });
});

module.exports = { ordersRouter };
