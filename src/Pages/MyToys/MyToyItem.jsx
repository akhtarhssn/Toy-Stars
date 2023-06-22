import { FaStar } from "react-icons/fa";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyToyItem = ({ toy, handleDelete }) => {
  // console.log(toy);
  const { _id, name, title, image, price, rating, category, quantity } = toy;
  return (
    <div className="relative overflow-hidden group">
      <div className="overflow-hidden rounded-xl">
        <img src={image} alt="Product Image" className="rounded-xl" />
      </div>
      {/* Icons */}
      <div className="absolute top-5 right-0 group-hover:right-5 space-y-2 transform translate-x-full transition-all duration-300 group-hover:translate-x-0">
        <div className="p-3 rounded-full bg-mediumPurple text-white cursor-pointer">
          <Link to={`/update/${_id}`}>
            <BsPencilSquare />
          </Link>
        </div>
        <button
          className="px-3 py-3 flex justify-center items-center rounded-full bg-mediumPurple text-white cursor-pointer"
          onClick={() => handleDelete(_id, title)}
        >
          <BsFillTrashFill />
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold font-Nunito mt-4 mb-2">
          {title.length > 30 ? `${title.substring(0, 25)}...` : title}
        </h2>
        <p className="text-mediumPurple mb-3">
          <Link>{name && name}</Link>
        </p>
        <div className="flex gap-4 items-center">
          <p className="text-lg font-bold text-purple-600">${price}</p>
          <span className="px-2 py-[2px] text-sm border-gray-300 rounded-md flex gap-3 border items-center">
            {rating} <FaStar />{" "}
          </span>
        </div>
        <div className="flex gap-5 my-4">
          <p className="border border-gray-400 rounded px-3 font-medium">
            {category}
          </p>
          <p className="border border-gray-400 rounded px-3 font-medium">
            Quantity: {quantity}
          </p>
        </div>
        <div className="">
          <button className="my-4 border-2 border-purple-600 rounded-md px-5 py-2">
            <Link to={`/toys/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyToyItem;
