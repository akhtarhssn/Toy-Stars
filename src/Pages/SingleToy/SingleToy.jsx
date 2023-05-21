import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const SingleToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    title,
    category,
    details,
    email,
    image,
    name,
    price,
    quantity,
    rating,
  } = toy;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-5 my-16">
      <div>
        <img src={image} alt={title} className="rounded-md" />
      </div>
      <div>
        <h2 className="text-5xl font-bold font-Nunito">{title}</h2>
        <p className="text-xl font-bold font-Nunito mt-4">${price}</p>
        <p className="text-gray-400 my-4">{details}</p>
        <Rating
          style={{ maxWidth: 120, maxHeight: 20 }}
          value={rating}
          readOnly
        />
        <div className="flex gap-5">
          <button className="my-8 border-2 border-purple-600 hover:bg-purple-600 hover:text-white duration-300 px-8 font-medium uppercase py-4 flex items-center gap-4">
            Add to Cart <FaShoppingBag />
          </button>
          <button className="my-8 border-2 border-purple-600 hover:bg-purple-600 hover:text-white duration-300 px-8 text-2xl py-4">
            <AiOutlineHeart />
          </button>
        </div>
        <div className="text-sm space-y-4">
          <p>
            <span className="font-semibold ">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold ">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-semibold ">Category:</span> {category}
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold mt-7">Seller Information: </p>
          <p className="my-2">
            <span className="font-semibold ">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold ">Email:</span> {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
