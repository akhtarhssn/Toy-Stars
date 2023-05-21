import { useEffect, useState } from "react";
import AllToyItem from "./AllToyItem";
import { FiSearch } from "react-icons/fi";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = () => {
    // Filter products based on search query
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredProducts;
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
      <div className="my-10 max-w-3xl mx-auto flex">
        <div className="w-full">
          <input
            type="text"
            placeholder="Type here"
            className="border w-full px-5 py-3 rounded-tl-md rounded-bl-md focus:outline-0 focus:border-mediumPurple"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <button
          className="px-5 py-3 rounded-tr-md rounded-br-md bg-mediumPurple text-white flex items-center justify-center w-24"
          onClick={handleSearch}
        >
          <FiSearch />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-16 p-5">
        {handleSearch().map((product) => (
          <AllToyItem key={product._id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
