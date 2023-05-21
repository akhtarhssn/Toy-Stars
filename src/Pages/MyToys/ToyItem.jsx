import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyItem = ({ toy }) => {
  console.log(toy);
  const {
    _id,
    title,
    name,
    email,
    image,
    category,
    price,
    quantity,
    rating,
    details,
  } = toy;
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
          <button className="my-8 border-2 border-purple-600 rounded-md px-5 py-2">
            <Link to={`/toys/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyItem;
