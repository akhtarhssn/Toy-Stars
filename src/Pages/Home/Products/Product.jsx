import product from "../../../assets/products/wanda.jpg";
import { FaStar } from "react-icons/fa";

const Product = () => {
  return (
    <div>
      <img src={product} alt="Product Image" className="rounded-xl" />
      <div>
        <h2 className="text-xl font-bold font-Nunito mt-4 mb-2">
          Funko POP ! Marvel: Wanda
        </h2>
        <div className="flex gap-8 items-center">
          <p className="text-lg font-bold text-purple-600">$479.25</p>
          <span className="px-2 py-1 border-gray-300 rounded-md flex gap-3 border items-center">
            5.0 <FaStar />{" "}
          </span>
        </div>
        <div className="">
          <button className="my-8 border-2 border-purple-600 rounded-md px-5 py-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
