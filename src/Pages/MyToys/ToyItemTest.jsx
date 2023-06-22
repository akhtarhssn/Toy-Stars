import { Link } from "react-router-dom";
import { HiPencil, HiTrash } from "react-icons/hi";

const ToyItemTest = ({ toy, handleDelete }) => {
  const { _id, name, email, title, image, price, rating, category, quantity } =
    toy;
  return (
    <div className="bg-[#EBECEF] px-7 py-10 rounded-lg hover:shadow-2xl hover:-translate-y-2 duration-500">
      <div className="flex items-center justify-around gap-5">
        <div>
          <img
            src={image}
            alt={title}
            className="h-60 rounded-lg border border-gray-400"
          />
        </div>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Name: </span>
            <span>{title}</span>
          </p>
          <p>
            <span className="font-medium">Price: </span>
            <span>${price}</span>
          </p>
          <p>
            <span className="font-medium">Quantity: </span>
            <span>{quantity}</span>
          </p>
          <p>
            <span className="font-medium">Category: </span>
            <span>{category}</span>
          </p>
          <p>
            <span className="font-medium">Seller: </span>
            <span>{name}</span>
          </p>
          <p>
            <span className="font-medium">Seller Email: </span>
            <span>{email}</span>
          </p>
          <p>
            <span className="font-medium">Rating: </span>
            <span>{rating}</span>
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-mediumPurple p-2 rounded-md text-white">
            <Link to={`/update/${_id}`}>
              <HiPencil />
            </Link>
          </div>
          <div className="bg-[#EA4744] p-2 rounded-md text-white">
            <Link onClick={() => handleDelete(_id)}>
              <HiTrash />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyItemTest;
