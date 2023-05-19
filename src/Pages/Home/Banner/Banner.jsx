import hero1 from "../../../assets/banner/hero-1.png";
import hero2 from "../../../assets/banner/hero-2.png";
import hero3 from "../../../assets/banner/hero-3.png";
import hero4 from "../../../assets/banner/hero-4.png";
const Banner = () => {
  return (
    <div className="carousel w-full my-16">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="md:flex justify-between items-center w-full md:px-28">
          <div>
            <p className="text-lg font-Nunito font-bold text-[#02224d] capitalize underline underline-offset-8 decoration-4 hover:decoration-mediumPurple">
              Today`s Collection
            </p>
            <h1 className="text-7xl font-black text-[#02224d] capitalize font-Nunito mt-4 mb-6">
              Where Joy and Adventure Await
            </h1>
            <p>
              <span className="text-lg font-semibold text-[#02224d]">
                Enter a World of Wonder and Imagination!
              </span>{" "}
              <span>
                Welcome to our enchanting toy world, where dreams come to life!
                Discover a treasure trove of captivating toys that inspire
                imagination, encourage learning, and create countless moments of
                joy. Get ready to embark on extraordinary adventures and make
                cherished memories that will last a lifetime.
              </span>
            </p>
            <button className="bg-mediumPurple py-4 px-10 rounded-md text-white text-xl font-semibold my-10 hover:bg-transparent hover:border-mediumPurple border-2 border-mediumPurple hover:text-mediumPurple duration-300">
              Explore
            </button>
          </div>
          <img className="h-[760px]" src={hero1} alt="" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle hover:bg-mediumPurple">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle hover:bg-mediumPurple">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="md:flex justify-between items-center w-full md:px-28">
          <div>
            <p className="text-lg font-Nunito font-bold text-[#02224d] capitalize underline underline-offset-8 decoration-4 hover:decoration-mediumPurple">
              Today`s Collection
            </p>
            <h1 className="text-7xl font-black text-[#02224d] capitalize font-Nunito mt-4 mb-6">
              Where Playtime Knows No Bounds!
            </h1>
            <p>
              <span className="text-lg font-semibold text-[#02224d]">
                Step into a world where imagination has no limits.
              </span>{" "}
              <span>
                Our wide range of toys encourages boundless creativity, endless
                laughter, and unforgettable playtime adventures. Get ready to
                explore, create, and let your imagination soar!
              </span>
            </p>
            <button className="bg-mediumPurple py-4 px-10 rounded-md text-white text-xl font-semibold my-10 hover:bg-transparent hover:border-mediumPurple border-2 border-mediumPurple hover:text-mediumPurple duration-300">
              Explore
            </button>
          </div>
          <img className="h-[760px]" src={hero4} alt="" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle hover:bg-mediumPurple">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:bg-mediumPurple">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="md:flex justify-between items-center w-full md:px-28">
          <div>
            <p className="text-lg font-Nunito font-bold text-[#02224d] capitalize underline underline-offset-8 decoration-4 hover:decoration-mediumPurple">
              Today`s Collection
            </p>
            <h1 className="text-7xl font-black text-[#02224d] capitalize font-Nunito mt-4 mb-6">
              Unlock the Magic of Fun!
            </h1>
            <p>
              <span className="text-lg font-semibold text-[#02224d]">
                Discover the key to a world filled with magical moments and
                delightful surprises.
              </span>{" "}
              <span>
                Our enchanting toys ignite laughter, wonder, and pure joy,
                making every day an extraordinary adventure. Join us on this
                enchanting journey and unlock the magic of fun!
              </span>
            </p>
            <button className="bg-mediumPurple py-4 px-10 rounded-md text-white text-xl font-semibold my-10 hover:bg-transparent hover:border-mediumPurple border-2 border-mediumPurple hover:text-mediumPurple duration-300">
              Explore
            </button>
          </div>
          <img className="h-[760px]" src={hero3} alt="" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle hover:bg-mediumPurple">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:bg-mediumPurple">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="md:flex justify-between items-center w-full md:px-28">
          <div>
            <p className="text-lg font-Nunito font-bold text-[#02224d] capitalize underline underline-offset-8 decoration-4 hover:decoration-mediumPurple">
              Today`s Collection
            </p>
            <h1 className="text-7xl font-black text-[#02224d] capitalize font-Nunito mt-4 mb-6">
              Toys that Spark Smiles and Memories!
            </h1>
            <p>
              <span className="text-lg font-semibold text-[#02224d]">
                At our toy wonderland, we specialize in crafting smiles and
                creating cherished memories.
              </span>{" "}
              <span>
                Our carefully curated selection of toys sparks laughter,
                promotes bonding, and leaves a lasting impression on little
                hearts. Get ready to fill your days with joy and create
                unforgettable memories!
              </span>
            </p>
            <button className="bg-mediumPurple py-4 px-10 rounded-md text-white text-xl font-semibold my-10 hover:bg-transparent hover:border-mediumPurple border-2 border-mediumPurple hover:text-mediumPurple duration-300">
              Explore
            </button>
          </div>
          <img className="h-[760px]" src={hero2} alt="" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle hover:bg-mediumPurple">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-mediumPurple">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
