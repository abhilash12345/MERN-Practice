const { productModel } = require("../../../models/productSchema");

const createProductController = async (req, res) => {
  try {
    console.log("------error in createProductController-----  ");
    const data = req.body;

    const newProduct = await productModel.create(data);
    res.status(201).json({
      isSuccess: true,
      message: "product created",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    console.log("------error in createProductController-----  ", err.message);

    if (err.name === "ValidationError" || err.code == 11000) {
      res.status(400).json({
        isSuccess: false,
        message: err.message,
        data: {},
      });
      return;
    }
    res.status(500).json({
      isSuccess: false,
      message: "internal server error",
      data: {},
    });
  }
};

const getProductController = async (req, res) => {
  try {
    console.log("--------Inside in getProductController---------");
    const result = await productModel.find();
    res.status(200).json({
      isSuccess: true,
      message: "Product List",
      data: {
        products: result,
      },
    });
  } catch (err) {
    console.log("------error in getProductController-----  ", err.message);

    res.status(500).json({
      isSuccess: false,
      message: "internal server error",
      data: {},
    });
  }
};

//update

const updateProductControler = async (req, res) => {
  try {
    console.log("--------Inside in updateProductControler---------");
    const data = req.body;
    const { productId } = req.params;

    const updatedProduct = await productModel
      .findByIdAndUpdate(productId, data, {
        // new: true,
        // runValidators: true,
      })
      .lean();

    if (updatedProduct === null) {
      res.status(400).json({
        isSuccess: false,
        message: "Id does not matches",
        data: {},
      });
      return;
    }

    res.status(200);
    res.json({
      isSuccess: true,
      message: "product updated",
      data: {
        product: updatedProduct,
      },
    });
  } catch (err) {
    console.log("--------error in updateProductControler--------", err.message);

    res.status(500).json({
      isSuccess: false,
      message: "internal server server ",
      data: {},
    });
  }
};

const deleteProductControler = async (req, res) => {
  try {
    console.log("--------Inside in deleteProductControler---------");
    const { productId } = req.params;

    const deleteProduct = await productModel.findByIdAndDelete(productId);

    if (deleteProduct === null) {
      res.status(400).json({
        isSuccess: false,
        message: "Id does not matches",
        data: {},
      });
      return;
    }

    res.status(204);
    res.json({
      isSuccess: true,
      message: "product deleted",
      data: {
        product: deleteProduct,
      },
    });
  } catch (err) {
    console.log("--------error in deleteProductControler--------", err.message);

    res.status(500).json({
      isSuccess: false,
      message: "internal server server ",
      data: {},
    });
  }
};

module.exports = {
  createProductController,
  getProductController,
  updateProductControler,
  deleteProductControler,
};
