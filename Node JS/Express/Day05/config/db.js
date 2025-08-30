const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_DB_URL, {
    dbName: "dat-05-express",
  })
  .then(() => {
    console.log("-------database connected ---------");
  })
  .catch((err) => {
    console.log("-------database connection error ---------");
    console.log(err.message);
    console.log("-------database connection error ---------");
  });
