const express = require("express"); // requiire ->> internal , it is user-defined , is it node-module.
const { myReadFile, mySaveFile } = require("./utils/file_helper");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("---->>", new Date(), req.method, req.url);
  next();
}); //middleware

app.get("/api/v1/products", async (req, res) => {
  const productArr = await myReadFile("./data.json");
  res.json({
    data: { products: productArr },
  });
});

app.post("/api/v1/products", async (req, res) => {
  const data = req.body;
  console.log(data);
  newId = uuidv4();
  data.id = newId;

  const oldArr = await myReadFile("./data.json");
  oldArr.push(data);
  await mySaveFile("./data.json", oldArr);
  res.status(201);
  res.json({
    isSuccess: true,
    message: "Product Created",
  });
});

app.patch("/api/v1/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const data = req.body;
  const products = await myReadFile("./data.json");

  const idx = products.findIndex((elem) => {
    return elem.id === productId;
  });
  if (idx === -1) {
    res.status(400);
    res.status({
      isSuccess: false,
      message: "Invalid Product Id",
    });
    return;
  }

  const oldObj = products[idx];
  products[idx] = { ...oldObj, ...data };
  mySaveFile("./data.json", products);
  res.status(200);
  res.json({
    isSuccess: true,
    message: "product updated",
    data: {
      product: products[idx],
    },
  });
});

app.delete("/api/v1/products/:productId", async (req, res) => {
  const { productId } = req.params;

  const products = await myReadFile("./data.json");

  const idx = products.findIndex((elem) => {
    return elem.id === productId;
  });
  if (idx === -1) {
    res.status(400);
    res.json({
      isSuccess: false,
      message: "Invalid Product Id",
    });
    return;
  }

  products.splice(idx, 1);

  mySaveFile("./data.json", products);
  res.status(204);
  res.json({
    isSuccess: true,
    message: "product deleted",
    data: {},
  });
});
app.listen(3900, () => {
  console.log("--------------------server started-----------------");
});
