const express = require("express"); // requiire ->> internal , it is user-define , is it node-module.
const { myReadFile, mySaveFile } = require("./utils/file_helper");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("---->>", new Date(), req.method, req.url);
  next();
}); //middleware

app.get("/api/v1/products", async (req, res) => {
  const productArr = await myReadFile("./data.json");
  res.json({
    isSuccess: true,
    message: "(GET) working...",
    data: { products: productArr },
  });
});

app.post("/api/v1/products", async (req, res) => {
  const data = req.body;
  console.log(data);
  const oldArr = await myReadFile("./data.json");
  oldArr.push(data);
  await mySaveFile("./data.json", oldArr);
  res.status(201);
  res.json({
    isSuccess: true,
    message: "Product Created",
  });
});

app.listen(3900, () => {
  console.log("--------------------server started-----------------");
});
