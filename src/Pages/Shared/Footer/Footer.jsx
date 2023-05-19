import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="footer p-10 max-w-7xl container mx-auto text-base-content">
        <div>
          <img src={logo} alt="Logo" className="h-28" />
          <p>
            Toy Stars Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
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
