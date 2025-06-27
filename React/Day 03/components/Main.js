const Button = () => {
  return <button>Hello</button>;
};

const Main = () => {
  return (
    <div>
      <section>
        <h1>Title-1</h1>
        <p>This is teh dummy text</p>
      </section>
      <section>
        <h1>Title-2</h1>
        <p>This is teh dummy text</p>
      </section>
    </div>
  );
};

export { Main, Button }; // named export , not default export
