console.log("START");

const pr = new Promise((res, rej) => {
  console.log("Inside Promise....");

  setTimeout(() => {
    console.log("resolving....");

    res({
      name: "Abhilash",
      city: "Delhi",
      userId: "001",
    });
  }, 60000);
});

console.log("MID");

pr.then((data) => {
  console.log("Done", data);
}).catch((err) => {
  console.log("Error Occured", err);
});

console.log("END");
