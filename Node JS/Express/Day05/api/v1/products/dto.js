const createProductValidator = (req, res, next) => {
  try {
    console.log("------error in createProductValidator-----  ");
    const { title, price, description, quantity } = req.body;
    if (quantity && quantity < 0) {
      res.status(400).json({
        isSuccess: false,
        message: "Quantity should be less than 0",
        data: {},
      });
      return;
    }

    if (!price || price < 1) {
      res.status(400).json({
        isSuccess: false,
        message: "Price should be greater than 0",
        data: {},
      });
      return;
    }

    if (!title || title.length <= 1) {
      res.status(400).json({
        isSuccess: false,
        message: "Title length ess than 2",
        data: {},
      });
      return;
    }
    if (description && description.length <= 5) {
      res.status(400).json({
        isSuccess: false,
        message: "description length is too short..",
        data: {},
      });
      return;
    }
    next();
  } catch (err) {
    console.log("------error in createProductValidator-----  ", err.message);

    res.status(500).json({
      isSuccess: false,
      message: "internal server error",
      data: {},
    });
  }
};

const updateProductValidator = (req, res, next) => {
  try {
    console.log("------error in updateProductValidator-----  ");
    const { title, price, description, quantity } = req.body;

    // validate the product id against the mongoose id

    if (quantity && quantity < 0) {
      res.status(400).json({
        isSuccess: false,
        message: "Quantity should be less than 0",
        data: {},
      });
      return;
    }

    if (price && price < 1) {
      res.status(400).json({
        isSuccess: false,
        message: "Price should be greater than 0",
        data: {},
      });
      return;
    }

    if (title && title.length <= 2) {
      res.status(400).json({
        isSuccess: false,
        message: "Title length ess than 2",
        data: {},
      });
      return;
    }
    if (description && description.length <= 5) {
      res.status(400).json({
        isSuccess: false,
        message: "description length is too short..",
        data: {},
      });
      return;
    }
    next();
  } catch (err) {
    console.log("------error in updateProductValidator-----  ", err.message);

    res.status(500).json({
      isSuccess: false,
      message: "internal server error",
      data: {},
    });
  }
};

const deleteProductValidator = (req, res, next) => {
  try {
    console.log("------error in deleteProductValidator-----  ");
    // validate the product id against the mongoose id

    next();
  } catch (err) {
    console.log("------error in deleteProductValidator-----  ", err.message);

    res.status(500).json({
      isSuccess: false,
      message: "internal server error",
      data: {},
    });
  }
};

module.exports = {
  createProductValidator,
  updateProductValidator,
  deleteProductValidator,
};
