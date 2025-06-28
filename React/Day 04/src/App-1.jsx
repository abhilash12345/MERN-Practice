import { fruits } from "./dummy-data";

const App = () => {
  console.log("abhilash");
  return (
    <div>
      <h2>hello</h2>
      <ol>
        {fruits.map((elem) => {
          return <li key={elem}>{elem}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
