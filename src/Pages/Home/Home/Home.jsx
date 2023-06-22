import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HowItWorks from "../HowItWorks/HowItWorks";
import Products from "../Products/Products";
import { useEffect } from "react";
import AOS from "aos";
import useTitle from "../../../hooks/useTitle";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  useTitle("Toy Stars | Home");

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Customize duration and other options
  }, []);

  return (
    <div>
      <Banner />
      <HowItWorks />
      <Gallery />
      <Products />
      <Testimonials />
    </div>
  );
};

export default Home;
