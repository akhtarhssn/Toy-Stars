import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  const { _id, title, image, price, rating } = products;
  const { user } = useContext(AuthContext);

  const handleToast = () => {
    if (!user) {
      toast.warning("Please Login First!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt="Product Image"
          className="rounded-xl hover:scale-125 duration-500"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold font-Nunito mt-4 mb-2">{title}</h2>
        <div className="flex gap-8 items-center">
          <p className="text-lg font-bold text-purple-600">${price}</p>
          <span className="px-2 py-1 border-gray-300 rounded-md flex gap-3 border items-center">
            {rating} <FaStar />{" "}
          </span>
        </div>
        <div className="">
          <button
            className="my-8 border-2 border-purple-600 rounded-md px-5 py-2"
            onClick={handleToast}
          >
            <Link to={`/toys/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
