import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyItem from "./MyToyItem";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/my-toys?email=${user?.email}`;
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        // console.log(data);
      });
  }, [url]);

  return (
    <>
      <div className="relative w-full rounded-xl my-16">
        <img
          src="https://as1.ftcdn.net/v2/jpg/04/76/79/70/1000_F_476797090_GD9J6JoeR956o2yXxMBEqQEw0xnlgAx5.jpg"
          className="w-full object-cover object-center md:h-72 h-52 rounded-xl"
        />
        <div className="absolute w-full h-full top-0 flex items-center bg-gradient-to-r from-mediumPurple to-[rgba(21, 21, 21, 0)] rounded-lg">
          <h2 className="text-4xl font-bold text-white ml-24">My Toys</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-16 p-5">
        {/* row 1 */}
        {myToys.map((toy) => (
          <MyToyItem
            key={toy._id}
            toy={toy}
            // handleDelete={handleDelete}
            // handleStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </>
  );
};

export default MyToys;
