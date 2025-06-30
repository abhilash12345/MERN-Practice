import { useState } from "react";

const App = () => {
  const [text, setText] = useState(() => {
    const val = localStorage.getItem("my-text");
    if (val) {
      return val;
    } else {
      return "hello";
    }
  });

  return (
    <div>
      {/* react: Controlled component */}
      <input
        onChange={(e) => {
          setText(e.target.value); // either pass the value or a initiator function (call back function )
          localStorage.setItem("my-text", e.target.value);
        }}
        value={text}
      />
      <p>{text}</p>
    </div>
  );
};

export default App;
