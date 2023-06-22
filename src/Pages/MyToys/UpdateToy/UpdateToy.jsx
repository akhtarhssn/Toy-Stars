import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { _id, title, price, quantity, details } = toy;
  const nevigate = useNavigate();
  useTitle(`Toy Stars | Update: ${title}`);
  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const updatedPrice = form.toy_price.value;
    const updatedQuantity = form.toy_quantity.value;
    const updatedDetails = form.toy_details.value;

    const updatedToy = {
      updatedPrice,
      updatedQuantity,
      updatedDetails,
    };

    // console.log(updatedToy);

    fetch(`https://kiddie-corner-server.vercel.app/toys/${_id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire("Modification Successful", `${title}`, "success");
          nevigate("/my-toys");
        }
      });
  };

  return (
    <div className="md:max-w-2xl container mx-auto my-20">
      <div className="bg-purple-900 rounded-tl-lg rounded-tr-lg p-7">
        <h2 className="text-2xl font-bold text-center font-Nunito  text-white">
          Update: {title}
        </h2>
      </div>
      <div className="bg-mediumPurple bg-opacity-10 rounded-bl-lg rounded-br-lg p-7">
        <form className="card-body" onSubmit={handleUpdate}>
          <div className="space-y-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="toy_price"
                type="text"
                defaultValue={price}
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                name="toy_quantity"
                type="text"
                defaultValue={quantity}
                className="input input-bordered "
                required
              />
            </div>

            <div className="w-full mb-5">
              <label className="label">
                <span className="label-text">Toy Details</span>
              </label>
              <textarea
                name="toy_details"
                defaultValue={details}
                className="textarea textarea-bordered textarea-lg w-full"
                rows={3}
              />
            </div>
            <div className="form-control mt-6">
              <button className="py-4 bg-mediumPurple rounded-lg text-neutral-50 font-semibold text-xl">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
