const student = {
  name: "abhilash",
  city: "dhanbad",
  height: 2,
  weight: 70,
};

const calculateBMI = (obj) => {
  const { height, weight } = obj;
  const bmi = weight / height ** 2;

  setTimeout(() => {
    console.log(bmi);
  }, 2000);
};

calculateBMI(student);
