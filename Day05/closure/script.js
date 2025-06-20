// function that another function as parametewr or return a function is called highe rorder function

const doSmoething = () => {
  let count = 0;

  const incrementCount = () => {
    count++;
    console.log(count);
  };

  return incrementCount;
};

const result = doSmoething();

result();
result();
result();
