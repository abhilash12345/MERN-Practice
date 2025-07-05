import { useState } from "react";

const App = () => {
  const [fruits, setFruits] = useState(() => {
    const savedFruits = localStorage.getItem("fruits"); // string JSON
    if (savedFruits) {
      const arr = JSON.parse(savedFruits); // convert string json to object
      return arr;
    } else {
      return [];
    }
  });

  const handleAddFruit = (e) => {
    e.preventDefault();
    const fruitname = e.target.fruitname.value;

    setFruits((prev) => {
      if (prev.includes(fruitname)) {
        alert("fruits already exisit");
        return prev;
      }
      const newArr = [...prev];
      newArr.push(fruitname);
      localStorage.setItem("fruits", JSON.stringify(newArr)); // convert object ->>string  :: json.stringify
      return newArr;
    });
  };

  const handleDelete = (idx) => {
    setFruits((prev) => {
      const newArr = [...prev];
      newArr.splice(idx, 1);
      localStorage.setItem("fruits", JSON.stringify(newArr));
      return newArr;
    });
  };

  return (
    <div>
      <form onSubmit={handleAddFruit}>
        <input type="text" placeholder="fruitname" name="fruitname" required />
        <button>Submit</button>
      </form>
      <div>
        {fruits.map((elem, idx) => {
          return (
            <div key={elem}>
              <p>{elem}</p>
              <button
                onClick={() => {
                  handleDelete(idx);
                }}
              >
                Delete
              </button>
              <button>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
