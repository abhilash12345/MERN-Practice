const { v4: uuidv4 } = require("uuid");
const { myReadFile, mySaveFile } = require("../utils/file_helpers");

const PRODUCTS_FILE_PATHS = "./models/products.json";

const saveProduct = async (data) => {
  const products = await myReadFile(PRODUCTS_FILE_PATHS);

  const idx = products.findIndex((elem) => {
    if (elem.title === data.title) {
      return true;
    } else return false;
  });

  if (idx !== -1) {
    throw new Error("Product with given title already exist!");
  }

  data.id = uuidv4();
  products.push(data);
  await mySaveFile(PRODUCTS_FILE_PATHS, products);
};

const readProducts = async (data) => {
  const products = await myReadFile(PRODUCTS_FILE_PATHS);
  return products;
};

const updateProducts = async (data, productId) => {
  const products = await myReadFile(PRODUCTS_FILE_PATHS);

  const idx = products.findIndex((elem) => {
    return elem.id === productId;
  });

  if (idx === -1) {
    throw new Error("Invalid product ID");
  }

  const oldObj = products[idx];
  products[idx] = { ...oldObj, ...data };
  await mySaveFile(PRODUCTS_FILE_PATHS, products);
  return products[idx];
};

const deleteProducts = async (productId) => {
  const products = await myReadFile(PRODUCTS_FILE_PATHS);
  const idx = products.findIndex((elem) => {
    return elem.id === productId;
  });
  if (idx === -1) {
    throw new Error("Invalid Product ID");
  }

  products.splice(idx, 1);
  mySaveFile(PRODUCTS_FILE_PATHS, products);
  return products;
};

module.exports = { saveProduct, readProducts, updateProducts, deleteProducts };
