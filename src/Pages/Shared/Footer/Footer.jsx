import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="footer p-10 max-w-7xl container mx-auto text-base-content">
        <div>
          <img src={logo} alt="Logo" className="h-28" />
          <p className="text-center">&copy; Copyright Toy Start 2023</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <Link
            className="link link-hover"
            to="https://facebook.com"
            target="_blank"
          >
            Facebook
          </Link>
          <Link
            className="link link-hover"
            to="https://instagram.com"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            className="link link-hover"
            to="https://linkedin.com"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="link link-hover"
            to="https://youtube.com"
            target="_blank"
          >
            Youtube
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">All Toys</a>
          <a className="link link-hover">Blog</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
