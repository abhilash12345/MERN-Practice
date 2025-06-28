import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((prev) => {
      return prev + 1;
    });
  };

  const handleDecrement = () => {
    setCounter((prev) => {
      return prev - 2;
    });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>++</button>
      <button onClick={handleDecrement}>--</button>
    </div>
  );
};

export default App;
