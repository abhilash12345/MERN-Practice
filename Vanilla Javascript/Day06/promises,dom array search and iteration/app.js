// const arr = ["Tata", "Mahindra", "suzuki", "hyundai"];
// arr.push("Honda");
// arr.push("Mitsubushi");
// console.log(arr);
// -------------------------------------------------

// const arr = ["Tata", "Mahindra", "suzuki", "hyundai", "Tata"];

// const ans = arr.lastIndexOf("Tata"); // return -1 if not present
// console.log(ans);

// ------------------------------------------------------------

// const arr = [
//   {
//     name: "Abhilash",
//     city: "Dhanbad",
//   },
//   {
//     name: "Rahul",
//     city: "Bangalore",
//   },
//   {
//     name: "Vivek",
//     city: "Mairwa",
//   },
// ];

// const ans = arr.lastIndexOf({ name: "Abhilash", city: "Dhanbad" });
// console.log(ans);

// -----------------------------------------------------------------------------

// const myFunc = (a) => {
//   console.log(a);
//   if (a.name == "Rahul") return true;
//   return false;
// };

// const arr = [
//   {
//     name: "Abhilash",
//     city: "Dhanbad",
//   },
//   {
//     name: "Abhilash",
//     city: "Delhi",
//   },
//   {
//     name: "Rahul",
//     city: "Bangalore",
//   },
//   {
//     name: "Vivek",
//     city: "Mairwa",
//   },
// ];

// const ans = arr.findLastIndex(myFunc);
// console.log(ans);
// ----------------------------------------
// use indexof when primitive and when non primitive use find becz indexof will not work due to address issue

// --------------------------------------

const myFunc = (a) => {
  console.log(a);
  if (a.marks < 25) return { ...a, remarks: "Fail" };
  else return { ...a, remarks: "Pass" };
};

const arr = [
  {
    name: "Abhilash",
    marks: 22,
    city: "Dhanbad",
  },
  {
    name: "Abhilash",
    marks: 25,
    city: "Delhi",
  },
  {
    name: "Rahul",
    marks: 62,
    city: "Bangalore",
  },
  {
    name: "Vivek",
    marks: 72,
    city: "Mairwa",
  },
];

// const ans = arr.forEach(myFunc); // will not return anything

const resultArr = arr.map(myFunc);
console.log(resultArr);
