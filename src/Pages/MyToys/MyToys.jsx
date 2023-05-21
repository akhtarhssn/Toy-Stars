const MyToys = () => {
  return (
    <>
      <div className="relative w-full rounded-xl my-16">
        <img
          src="{image}"
          className="w-full object-cover object-center md:h-72 h-52 rounded-xl"
        />
        <div className="absolute w-full h-full top-0 flex items-center bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)] rounded-lg">
          <h2 className="text-4xl font-bold text-white ml-24">My Toys</h2>
        </div>
      </div>
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          <tbody>
            {/* row 1 */}
            {/* {bookings.map((booking) => (
              <BookingItem
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleStatusChange={handleStatusChange}
              />
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
