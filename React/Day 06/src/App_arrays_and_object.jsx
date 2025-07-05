// uncontrolled component - React handle ewvrtything via DOM

import { useState } from "react";

const App = () => {
  const [users, setUser] = useState([
    {
      username: "Abhilash",
      city: "Dhanbad",
      email: "kumarsinghabhilash@gmail.com",
    },
  ]);

  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const city = e.target.city.value;
    const email = e.target.email.value;

    if (name.length <= 2) {
      alert("invalid name");
    } else if (city.length <= 1) {
      alert("invalid city");
    } else if (email.length < 5) {
      alert("invalid email");
    } else {
      console.log("--------Success-----------");
      setUser((prev) => {
        const newArr = [...prev]; // new address but old values as it is
        newArr.push({
          username: name,
          city,
          email, // Es6 syntax: if key and value (variable name of thevalue is same) then write only one
        });
        return newArr;
      });
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
      <div>
        {users.map((elem) => {
          return (
            <div>
              <h3>{elem.username}</h3>
              <p>{elem.email}</p>
              <h5>{elem.city}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
