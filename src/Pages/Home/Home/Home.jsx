import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HowItWorks from "../HowItWorks/HowItWorks";
import Products from "../Products/Products";
import { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Customize duration and other options
  }, []);

  return (
    <div>
      <Banner />
      <HowItWorks />
      <Gallery />
      <Products />
    </div>
  );
};

export default Home;
