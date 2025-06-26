console.log("hello");

const successCallbackFunction = (data) => {
  console.log("success", new Date(), data);
};

const failureCallbackFunction = (err) => {
  console.log("error", err);
};

const pr = fetch("https://dummyjson.commm/recipes");

console.log(pr);

pr.then(successCallbackFunction).catch(failureCallbackFunction);
