const validateProductForCreation = (req, res, next) => {
  const data = req.body;
  const { title, price, quantity } = data;
  console.log("---->> inside validateProductForCreation ----->>");

  try {
    if (!title || title.length < 5) {
      res.status(400).json({
        isSuccess: false,
        message: "Title is too short ",
      });
      return;
    }

    if (!price || price <= 0) {
      res.status(400).json({
        isSuccess: false,
        message: "Invalid price",
      });
      return;
    }

    if (!quantity || quantity <= 0) {
      res.status(400).json({
        isSuccess: false,
        message: "quantity is invalid",
      });
      return;
    }

    req.body = { title: title.trim(), price, quantity };
    next();
  } catch (err) {
    console.log("<<--- Error in validateProductForCreation --->>", err.message);
    res.status(500).json({
      isSuccess: false,
      message: "Internal server Error",
    });
  }
};

module.exports = { validateProductForCreation };
