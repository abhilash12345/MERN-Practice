import { useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [email, settEmail] = useState();

  const handleSubmit = () => {
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
      <div>
        <div>
          {/* controlled component -----React */}
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            name="username"
            // required doe snot work outside the forms
          ></input>
        </div>
        <div>
          {/* controlled component -----React */}
          <input
            type="email"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
            name="city"
          ></input>
        </div>
        <div>
          {/* controlled component -----React */}
          <input
            type="text"
            onChange={(e) => {
              settEmail(e.target.value);
            }}
            value={email}
            name="email"
          ></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <h4>{city}</h4>
      </div>
    </>
  );
};

export default App;
