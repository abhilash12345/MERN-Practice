// 1  ->> 0.25rem ->>4 px
// 4 ->>1 rem 16px
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
const NavBar = () => {
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("text") || "");
  let navigate = useNavigate();

  const handleSearch = () => {
    return navigate(`/search?text=${searchText}`);
  };
  return (
    <nav className="flex px-6 py-4 justify-between items-center bg-emerald-200">
      <p>Shopify</p>
      <div>
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
      <div className="h-8 w-8 bg-blue-600 rounded-full"></div>
    </nav>
  );
};

export { NavBar };
