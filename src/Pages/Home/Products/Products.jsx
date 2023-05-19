import CategoryTabs from "../../../components/CategoryTabs";
import Product from "./Product";

const Products = () => {
  return (
    <div className="my-20">
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
      <CategoryTabs />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-16">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
