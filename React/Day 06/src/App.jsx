// uncontrolled component - React handle ewvrtything via DOM

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    console.log("name", name);
    const city = e.target.city.value;
    console.log("city", city);
    const email = e.target.email.value;
    console.log("email", email);
    if (name.length <= 2) {
      alert("invalid name");
    } else if (city.length <= 1) {
      alert("invalid city");
    } else if (email.length < 5) {
      alert("invalid email");
    } else {
      alert("success");
      // console.log("success!!");
    }
  };

  return (
    <>
      {/* we were getting the value from an event but the control was always with the dom*/}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username"></input>
        </div>
        <div>
          <input type="email" name="email"></input>
        </div>
        <div>
          <input type="text" name="city"></input>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default App;
