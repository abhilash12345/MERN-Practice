import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useSearchParams } from "react-router";
import { ProductCard } from "../components/ProductCard";

const LIMIT = 10;

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const searchText = searchParams.get("text");

  const getSearchResult = async () => {
    try {
      setLoading(true);
      const skip = LIMIT * (page - 1);
      await new Promise((res) => {
        setTimeout(res, 2000);
      });
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchText}&limit=${LIMIT}&skip=${skip}`
      );
      const data = await response.json();
      setProducts(data.products);
      setTotalItems(data.total);
    } catch (err) {
      alert(`cannot get search results:${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchResult();
  }, [searchText, page]);

  const goToPreviousPage = () => {
    setPage((prev) => {
      if (prev > 1) return prev - 1;

      return 1;
    });
  };

  const goToNextPage = () => {
    setPage((prev) => {
      if (prev < totalpages) return prev + 1;

      return totalpages;
    });
  };

  const dummyArray = Array(5).fill("hello");
  const totalpages = Math.ceil(totalItems / LIMIT);
  const dummyArrayPagination = Array(totalpages).fill("hi");

  return (
    <>
      <NavBar />
      <main className="grid grid-cols-[300px_1fr] gap-6 p-6">
        <div className="bg-purple-500/30"></div>
        {loading ? (
          <div>
            {dummyArray.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="mb-4 p-5 grid grid-cols-[200px_1fr] gap-5 bg-amber-400/50 rounded-xl"
                >
                  <div className=" ">
                    <div className="h-50 w-50 bg-gray-300"></div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="h-5  bg-gray-300"></p>
                    <p className="h-5  bg-gray-300"></p>
                    <p className="h-5  bg-gray-300"></p>
                    <p className="h-5  bg-gray-300"></p>
                    <div className="flex gap-4">
                      <p className="h-5 w-20  bg-gray-300"></p>
                      <p className="h-5 w-20  bg-gray-300"></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {products.map((elem) => {
              return <ProductCard key={elem.id} {...elem} />;
            })}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div>
            <p className="text-center text-red-700">
              No Products found for your search
            </p>
          </div>
        )}
      </main>
      <div className="pb-4 flex flex-wrap gap-5 items-center justify-center">
        {!loading && products.length !== 0 && (
          <button
            className={`py-1 px-4 bg-blue-700 rounded-md text-white ${
              page === 1 ? "cursor-not-allowed bg-blue-700/70" : ""
            }`}
            disabled={page === 1}
            onClick={goToPreviousPage}
          >
            &lt;&lt;
          </button>
        )}

        {dummyArrayPagination.map((elem, idx) => {
          return (
            <button
              key={idx}
              className={`py-1 px-4 bg-blue-600 rounded-md text-white ${
                page === idx + 1
                  ? "bg-blue-700/70 cursor-not-allowed"
                  : "bg-blue-700"
              }`}
              onClick={() => {
                setPage(idx + 1);
              }}
            >
              {idx + 1}
            </button>
          );
        })}
        <button
          className={`py-1 px-4 bg-blue-700 rounded-md text-white ${
            page === totalpages ? "cursor-not-allowed bg-blue-700/70" : ""
          }`}
          disabled={page === totalpages}
          onClick={goToNextPage}
        >
          &gt;&gt;
        </button>
      </div>
      <Footer />
    </>
  );
};

export { SearchPage };
