const express = require("express");
const { ordersRouter } = require("./orders/routes");
const { productsRouter } = require("./products/routes");

const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
  console.log("Api Router invoked");
  next();
}); // router level middleware

apiRouter.use("/orders", ordersRouter);

apiRouter.use("/products", productsRouter);

module.exports = { apiRouter };
