const Gallery = () => {
  return (
    <div className="my-28 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-Nunito font-[800] md:text-5xl">
        Our Gallery
      </h2>
      <p className="my-4 max-w-3xl mx-auto text-gray-500">
        Discover the magic in our enchanting toy gallery. Ignite imagination and
        explore a world of wonder through captivating toys that inspire joy and
        creativity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-10">
        {/* First Item */}
        <div className="col-span-6 row-span-2 md:col-span-6 md:row-span-2">
          {/* Content for the first item */}
          <div className="grid grid-cols-6 grid-rows-2  rounded-2xl overflow-hidden">
            <img
              className="object-cover w-full col-span-6 row-span-2 rounded-2xl hover:scale-125 duration-500"
              src="https://www.gizmochina.com/wp-content/uploads/2018/11/xiaomi-marvel-doll.jpg"
              alt="First Item"
            />
          </div>
        </div>

        {/* Remaining Items */}
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-1">
          {/* Content for the second item */}
          <div className="h-full rounded-2xl overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-2xl hover:scale-125 duration-500"
              src="https://ae01.alicdn.com/kf/H9c2cff96ae0845babca85008eac9f3d89/Anime-Marvel-Avengers-Thor-Odinson-Cute-Kawaii-Super-Hero-10cm-Action-Figure-Toys.jpg"
              alt="Second Item"
            />
          </div>
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-1">
          {/* Content for the third item */}
          <div className="h-full rounded-2xl overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-2xl hover:scale-125 duration-500"
              src="https://ae01.alicdn.com/kf/H76c0a88b5e434f3eadd1bb1ce9a2bda4Y/Anime-Marvel-Avengers-Loki-in-Movie-Thor-Cute-Kawaii-Super-Hero-10cm-Action-Figure-Toys.jpg_Q90.jpg_.webp"
              alt="Third Item"
            />
          </div>
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-1">
          {/* Content for the fourth item */}
          <div className="h-full rounded-2xl overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-2xl hover:scale-125 duration-500"
              src="https://my-live-01.slatic.net/p/ed8acd35987e3d69bc2ce38d02119093.jpg"
              alt="Fourth Item"
            />
          </div>
        </div>
        <div className="col-span-6 row-span-1 md:col-span-3 md:row-span-1">
          {/* Content for the fifth item */}
          <div className="h-full rounded-2xl overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-2xl hover:scale-125 duration-500"
              src="https://ae01.alicdn.com/kf/HTB1uDpsRFXXXXaDXpXXq6xXFXXXg/643-Superman-Figure-Super-Hero-Justice-Edition-PVC-Action-Figure-Gift-Collection-Model-Toys-10cm.jpg_Q90.jpg_.webp"
              alt="Fifth Item"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
