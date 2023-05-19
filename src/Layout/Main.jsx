import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl container mx-auto p-5 md:p-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
