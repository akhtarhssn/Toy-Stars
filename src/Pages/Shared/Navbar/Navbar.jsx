import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <header className="border-b border-b-gray-300">
      <div className="navbar bg-base-100 max-w-7xl container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>All Toys</Link>
              </li>
              {user && (
                <li>
                  <Link>My Toys</Link>
                </li>
              )}
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img className="h-20" src={logo} alt="Toy Stars Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>All Toys</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <p className="p-3">
                  Hi!{" "}
                  <span className="font-black font-Nunito">
                    UserName if Available
                  </span>
                </p>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>My Toys</a>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              className="border-2 py-3 px-8 rounded-md border-mediumPurple font-semibold text-mediumPurple hover:bg-mediumPurple hover:text-white duration-500"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
