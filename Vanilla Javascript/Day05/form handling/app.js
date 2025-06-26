const title = document.getElementById("greeting");

const handleUserName = (e) => {
  const inputElement = e.target;
  const val = inputElement.value;

  title.innerHTML = `Hello! <em>${val}</em>`;
};

// when teh form is submitted
// any button work inside the form by default work as submit button
const handleSubmit = (e) => {
  e.preventDefault();

  const inputs = e.target;

  //   const nameInput = inputs[0];
  //   console.log(nameInput.value);

  //   const emailInput = inputs[1];
  //   console.log(emailInput.value);

  //   const passwordInput = inputs[2];
  //   console.log(passwordInput.value);

  const nameInput = inputs.username;
  console.log(nameInput.value);

  const emailInput = inputs.email;
  console.log(emailInput.value);

  const passwordInput = inputs.userpassword;
  console.log(passwordInput.value);

  if (passwordInput.value.length < 5) {
    alert("please use strong password");
    return;
  }

  window.open("./thankyou.html", "_self");
};
