import { useParams } from "react-router";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const ViewPage = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(false);
  const params = useParams();
  // console.log(params);
  const { productId } = params;

  const getProductInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      alert(`Error Getting Product Info: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        {isLoading ? (
          <div className="h-20 flex items-center justify-center">
            <BeatLoader />
          </div>
        ) : (
          <>
            {" "}
            <h1>{product.title}</h1>
            <div className=" flex flex-wrap gap-6 items-center justify-center">
              {product.images?.map((elem) => {
                return <img key={elem} src={elem} width={200} />;
              })}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export { ViewPage };
