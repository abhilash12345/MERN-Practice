// 1  ->> 0.25rem ->>4 px
// 4 ->>1 rem 16px
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
const NavBar = () => {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("text") || "");
  let navigate = useNavigate();

  const handleSearch = () => {
    return navigate(`/search?text=${searchText}`);
  };
  return (
    <nav className="flex px-6 py-4 justify-between items-center bg-emerald-200">
      <div className="text-xl font-bold text-purple-600">Shopify</div>

      <div className="flex gap-4 items-center">
        <input
          className="px-2 py-1 border-1 border-amber-700 rounded-lg mr-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={handleSearch}
          className="px-2 py-1 border-1 border-amber-700 rounded-lg bg-amber-700 text-white cursor-pointer"
        >
          Search
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/" className="text-blue-700 underline">
          Home
        </Link>
        <Link to="/login" className="text-blue-700 underline">
          Login
        </Link>
        <div></div>
      </div>
    </nav>
  );
};

export { NavBar };
