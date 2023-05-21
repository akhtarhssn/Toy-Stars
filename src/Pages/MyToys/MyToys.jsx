import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyItem from "./MyToyItem";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const url = `https://kiddie-corner-server.vercel.app/my-toys?email=${user?.email}`;
  const [myToys, setMyToys] = useState([]);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setToys(data); // Set the initial value of `toys` to `data`
      });
  }, [url]);

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
            setMyToys(remaining); // Update the `myToys` state

            const updated = myToys.find((toy) => toy._id === id);
            const newToys = [updated, ...remaining];
            setToys(newToys); // Update the `toys` state
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-16 p-5">
        {/* row 1 */}
        {myToys.map((toy) => (
          <MyToyItem
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
