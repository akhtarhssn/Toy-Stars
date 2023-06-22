import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://kiddie-corner-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("https://kiddie-corner-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Filter products based on the selected category
  const getFilteredProducts = (categoryId) => {
    if (categoryId === "all") {
      return products;
    } else {
      return products.filter(
        (product) => product.category_id === categoryId.toString()
      );
    }
  };

  const filteredProducts = selectedCategory
    ? getFilteredProducts(selectedCategory)
    : products;

  return (
    <div className="my-20" data-aos="fade-up">
      <div className="text-center">
        <h2 className="text-2xl font-bold md:text-5xl font-Nunito">
          Our Products
        </h2>
        <p className="text-gray-500 md:max-w-3xl mx-auto mt-3">
          Embark on an extraordinary journey with our incredible selection of
          toys. Explore, play, and ignite your imagination with our amazing
          collection of captivating products.
        </p>
      </div>
      {/* CategoryTab Section */}
      <div className="flex justify-center items-center my-10 gap-5 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`py-2 px-6 border-2 rounded-md text-lg font-semibold ${
              selectedCategory === category.id ? "border-purple-500" : ""
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 my-16 p-5">
        {filteredProducts.map((product) => (
          <Product key={product._id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
