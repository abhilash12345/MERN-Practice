const App = () => {
  let searchText = "Hello";
  const handleSearch = (e) => {
    const val = e.target.value;
    searchText = val;
    console.log(searchText);
  };
  return (
    <div>
      <input type="text" onKeyUp={handleSearch} />
      <h2>{searchText}</h2>
    </div>
  );
};

export default App;
