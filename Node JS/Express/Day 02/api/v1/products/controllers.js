const { saveProduct, readProducts } = require("../../../models/productModel");

const createProductController = async (req, res) => {
  try {
    const data = req.body;
    await saveProduct(data); // data
    res.status(201).json({
      isSuccess: true,
      message: "Product Created",
    });
  } catch (err) {
    console.log("<<--- Error in createProductController --->>", err.message);
    res.status(500).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

const getProductController = async (req, res) => {
  try {
    const products = await readProducts();
    res.status(201).json({
      isSuccess: true,
      message: "Product created",
      data: {
        products,
      },
    });
  } catch (err) {
    console.log("<<--- Error in getProductController --->>", err.message);
    res.status(500).json({
      isSuccess: false,
      message: "Internal server Error",
    });
  }
};

module.exports = { createProductController, getProductController };
