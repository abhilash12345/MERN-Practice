//common js : node js

const division = (a, b) => {
  if (b == 0) {
    return a;
  } else {
    return a / b;
  }
};

const power = (a, b) => {
  return a ** b;
};

module.exports = {
  division: division,
  power: power,
};
