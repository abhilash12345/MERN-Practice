const { power, division } = require("./math_helper");

const calculateBMI = (obj) => {
  const { height, weight } = obj;
  const heightsq = power(height, 2);

  const bmi = division(weight, heightsq);

  setTimeout(() => {
    console.log(bmi);
  }, 2000);
};

module.exports = calculateBMI;
