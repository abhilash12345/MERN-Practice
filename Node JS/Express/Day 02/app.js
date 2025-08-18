const express = require("express");
const morgan = require("morgan");
const { apiRouter } = require("./api/v1/routes");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    isSucess: true,
    message: "Server is working fine......",
  });
});

app.use("/api/v1", apiRouter); // middleware app level

app.listen(3900, () => {
  console.log("--------server started---------");
});
