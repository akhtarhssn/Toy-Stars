import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToyItem = ({ products }) => {
  const {
    _id,
    title,
    image,
    price,
    rating,
    name,
    category,
    quantity,
    userPhoto,
  } = products;
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
    <div className="group">
      <div className="overflow-hidden rounded-xl relative">
        <img
          src={image}
          alt="Product Image"
          className="rounded-xl group-hover:scale-125 duration-500 border"
        />
        <p className="font-bold text-white absolute top-5 right-5 bg-purple-600 z-10 px-3 py-2 rounded">
          ${price}
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold font-Nunito mt-4">
          {title.length > 25 ? `${title.substring(0, 25)}...` : title}
        </h2>
        <p className="text-mediumPurple my-4 flex gap-3 items-center">
          <img
            src={userPhoto && userPhoto}
            alt=""
            className="h-7 w-7 object-cover rounded-full"
          />{" "}
          <Link className="font-semibold">{name && name}</Link>
        </p>
        <div className="flex gap-5 mb-4">
          <span className="px-2 py-[2px] text-sm border-gray-300 rounded-md flex gap-3 border items-center font-medium">
            {rating} <FaStar className="text-amber-500" />{" "}
          </span>
          <p className="border border-gray-400 rounded px-3 font-medium">
            {category}
          </p>
          <p className="border border-gray-400 rounded px-3 font-medium">
            Qty: {quantity}
          </p>
        </div>
        <div className="">
          <button
            className="my-2 border-2 border-purple-600 rounded-md px-5 py-2 hover:bg-purple-600 hover:text-white transition-all duration-300"
            onClick={handleToast}
          >
            <Link to={`/toys/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllToyItem;
