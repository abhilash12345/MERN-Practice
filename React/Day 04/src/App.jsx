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
  const handleReset = () => {
    setCounter((prev) => {
      return prev - prev;
    });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>++</button>
      <button onClick={handleDecrement}>--</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
