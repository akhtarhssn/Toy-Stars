import { useEffect, useState } from "react";
import Product from "../Home/Products/Product";

const AllToys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold md:text-5xl font-Nunito">All Toys</h2>
        <p className="text-gray-500 md:max-w-3xl mx-auto mt-3">
          Embark on an extraordinary journey with our incredible selection of
          toys. Explore, play, and ignite your imagination with our amazing
          collection of captivating products.
        </p>
      </div>
      {/* CategoryTab Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-16 p-5">
        {products.map((product) => (
          <Product key={product._id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
