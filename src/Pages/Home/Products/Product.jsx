import { useContext } from "react";
import product from "../../../assets/products/wanda.jpg";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
    } else {
      navigate("/register");
    }
  };

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
          <button
            className="my-8 border-2 border-purple-600 rounded-md px-5 py-2"
            onClick={handleToast}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
