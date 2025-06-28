import { useState } from "react";

const Address = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [submitData, setSubmitData] = useState(null);

  const details = () => {
    setSubmitData({ name, city });
  };
  return (
    <div>
      <ol>
        <h3>Name</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </ol>
      <ol>
        <h3>City</h3>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </ol>
      <ol>
        <button onClick={details}> Click Here</button>
      </ol>
      {submitData && (
        <div>
          <p>Your Name : {submitData.name}</p>
          <p>Your Address: {submitData.city}</p>
        </div>
      )}
    </div>
  );
};

export default Address;
