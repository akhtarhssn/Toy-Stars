import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import MyToyItem from "./MyToyItem";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import ToyItemTest from "./ToyItemTest";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // Add sortOrder state
  const [toys, setToys] = useState([]);
  useTitle("Toy Stars | My Toys");

  useEffect(() => {
    fetch(
      `https://kiddie-corner-server.vercel.app/my-toys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setToys(data); // Set the initial value of `toys` to `data`
      });
  }, [user]);

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    let sortedToys = [...myToys];
    sortedToys.sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setMyToys(sortedToys);
  };

  const handleDelete = (id, toyName) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://kiddie-corner-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", `${toyName} has been removed`, "success");
            }

            const remaining = myToys.filter((toy) => toy._id !== id);
            setMyToys(remaining);
          });
      }
    });
  };

  return (
    <>
      <div className="relative w-full rounded-xl my-16">
        <img
          src="https://as1.ftcdn.net/v2/jpg/04/76/79/70/1000_F_476797090_GD9J6JoeR956o2yXxMBEqQEw0xnlgAx5.jpg"
          className="w-full object-cover object-center md:h-72 h-52 rounded-xl"
        />
        <div className="absolute w-full h-full top-0 flex items-center bg-gradient-to-r from-purple-800 to-[rgba(21, 21, 21, 0)] rounded-lg">
          <h2 className="text-4xl font-bold text-white ml-24">My Toys</h2>
        </div>
      </div>
      <p className="text-center font-semibold font-Nunito">
        Hover the product to Edit
      </p>
      {/* Sorting select */}
      <div className="flex justify-center my-4">
        <label htmlFor="sortOrder" className="mr-2">
          Sort by Price:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={handleSort}
          className="px-4 py-2 bg-white rounded border-2"
        >
          <option value="">-- Select Order --</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:p-0">
        {/* row 1 */}
        {myToys.map((toy) => (
          <ToyItemTest
            key={toy._id}
            toy={toy}
            handleDelete={handleDelete}
            // handleStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </>
  );
};

export default MyToys;
