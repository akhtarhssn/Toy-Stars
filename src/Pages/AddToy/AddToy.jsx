// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
  // const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.title.value;
    const image = form.toy_img.value;
    const category = form.toy_category.value;
    const price = form.toy_price.value;
    const quantity = form.toy_quantity.value;
    const rating = form.toy_rating.value;
    const details = form.toy_details.value;

    const newToy = { name, image, category, price, quantity, rating, details };
    console.log(newToy);

    // Send/post data to server
    fetch(`http://localhost:5000/add-toy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="md:max-w-2xl container mx-auto my-20">
      <div className="bg-purple-900 rounded-tl-lg rounded-tr-lg p-7">
        <h2 className="text-3xl font-bold text-center font-Nunito  text-white">
          Add a Toy
        </h2>
      </div>
      <div className="bg-mediumPurple bg-opacity-10 rounded-bl-lg rounded-br-lg p-7">
        <form className="card-body" onSubmit={handleAddToy}>
          <div className="space-y-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Toy Name"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Toy Image</span>
              </label>
              <input
                name="toy_img"
                type="text"
                placeholder="Toy Image Url"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="select select-bordered" name="toy_category">
                <option disabled defaultChecked>
                  Select one
                </option>
                <option>Star Wars</option>
                <option>Marvel</option>
                <option>DC</option>
                <option>Transformers</option>
                <option>Avatar</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="toy_price"
                type="text"
                placeholder="$0.00"
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
                placeholder="Quantity"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <input
                name="toy_rating"
                type="text"
                placeholder="rating"
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
                placeholder="Details"
                className="textarea textarea-bordered textarea-lg w-full"
                rows={3}
              />
            </div>
            <div className="form-control mt-6">
              <button className="py-4 bg-mediumPurple rounded-lg text-neutral-50 font-semibold text-xl">
                Confirm Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
