require("dotenv").config();
require("./config/db");
const express = require("express");
const { productModel } = require("./models/productSchema");

require("./config/db"); // resolution -->>wrap ->> execute ->>catche

const app = express();

app.get("/", async (req, res) => {
  try {
    const newProduct = await productModel.create({
      title: "bag",
      price: 10,
    });
    console.log(newProduct);
    res.json({
      isSuccess: true,
      message: "product created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      isSuccess: false,
      message: "Internal server error",
    });
  }
});

app.listen(3900, () => {
  console.log("------server started------");
});
