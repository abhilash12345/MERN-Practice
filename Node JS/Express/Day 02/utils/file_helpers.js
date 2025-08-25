const fsPromises = require("fs/promises");

const myReadFile = async (filePath) => {
  try {
    data = await fsPromises.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log("Error handling the file--->", err.message);
    return [];
  }
};

const mySaveFile = async (filePath, data) => {
  try {
    const str = JSON.stringify(data, null, 2); //JSON object ==>> stringify
    await fsPromises.writeFile(filePath, str);
  } catch (err) {
    console.log("Error saving the file--->", err.message);
    return [];
  }
};

module.exports = { myReadFile, mySaveFile };
