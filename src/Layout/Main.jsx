import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-5 md:p-0">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Main;
