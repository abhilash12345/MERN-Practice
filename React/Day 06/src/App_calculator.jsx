import { Fragment, useState } from "react";

// <Fragment></Fragment>
// <React.Fragment></React.Fragment>
//<> </>

const App = () => {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);

  // enter first number
  // we tell teh operator
  // we ente teh second number

  const handleNumberClick = (e) => {
    const val = e.target.innerText;
    console.log(val);
    if (operator == null) {
      setFirstNumber((prev) => {
        if (prev == null) {
          return val;
        } else {
          return Number(prev * 10) + Number(val);
        }
      });
    } else {
      setSecondNumber((prev) => {
        if (prev == null) {
          return val;
        } else {
          return Number(prev * 10) + Number(val);
        }
      });
    }
  };

  return (
    <>
      <div>
        <button onClick={handleNumberClick}>1</button>
        <button onClick={handleNumberClick}>2</button>
        <button onClick={handleNumberClick}>3</button>
        <button onClick={handleNumberClick}>4</button>
        <button onClick={handleNumberClick}>5</button>
        <button onClick={handleNumberClick}>6</button>
        <button onClick={handleNumberClick}>7</button>
        <button onClick={handleNumberClick}>8</button>
        <button onClick={handleNumberClick}>9</button>
        <button onClick={handleNumberClick}>0</button>
      </div>
      <div>
        <button
          onClick={() => {
            setOperator("+");
          }}
        >
          +
        </button>
      </div>
      <div>{firstNumber !== null ? <p>{firstNumber}</p> : null}</div>
      <div>{secondNumber !== null ? <p>{secondNumber}</p> : null}</div>
      <div>
        {secondNumber !== null && firstNumber !== null ? (
          <p>={Number(secondNumber) + Number(firstNumber)}</p>
        ) : null}
      </div>
    </>
  );
};

export default App;
