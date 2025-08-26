const {
  saveProduct,
  readProducts,
  updateProducts,
  deleteProducts,
} = require("../../../models/productModel");

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

const updateProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const products = await updateProducts(data, productId);
    res.status(200).json({
      isSuccess: true,
      message: "Product updated",
      data: {
        products,
      },
    });
  } catch (err) {
    console.log("<<--- Error in updateProductController --->>", err.message);
    res.status(500).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { productId } = req.params;

    const products = await deleteProducts(productId);
    res.status(200).json({
      message: "product deleted",
    });
  } catch (err) {
    console.log("<<--- Error in deleteProductController --->>", err.message);
    res.status(500).json({
      isSuccess: false,
      message: err.message,
    });
  }
};

module.exports = {
  createProductController,
  getProductController,
  updateProductController,
  deleteProductController,
};
