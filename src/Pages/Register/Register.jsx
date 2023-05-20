import { useContext, useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Registration Successful");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setSuccess("");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        setSuccess("Google Signin Successful");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setSuccess("");
      });
  };

  return (
    <div className="my-16 max-w-6xl container mx-auto">
      <div className="card w-full md:max-w-[550px] md:mx-auto border border-neutral-300 p-4 md:p-10 col-span-5">
        <h1 className="text-center text-4xl font-bold">Register</h1>
        {error && (
          <span className="my-5 text-center text-orange-400 font-medium border border-orange-400 p-2 rounded">
            {error}
          </span>
        )}
        {success && (
          <span className="my-5 text-center text-blue-600 font-medium border border-blue-500 p-2 rounded">
            {success}
          </span>
        )}
        <form className="card-body p-0" onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="py-4 bg-mediumPurple rounded-lg text-neutral-50 font-semibold text-xl">
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-lg mt-4">
          Have an Account?{" "}
          <Link to="/login" className="text-mediumPurple font-semibold">
            Sign In
          </Link>
        </p>
      </div>
      {/* Form End */}
      <div className="text-center my-8 space-y-5">
        <p>Or Sign In With</p>
        <div className="flex items-center justify-center gap-5 text-xl">
          <button className="p-4 text-[#3B5998] bg-neutral-200 rounded-full hover:bg-mediumPurple hover:text-neutral-50 duration-300">
            <FaFacebookF />
          </button>
          <button className="p-4 text-[#0A66C2] bg-neutral-200 rounded-full hover:bg-mediumPurple hover:text-neutral-50 duration-300">
            <FaLinkedinIn />
          </button>
          <button
            className="p-4 text-[#f12121] bg-neutral-200 rounded-full hover:bg-primaryOrange hover:text-neutral-50 duration-300"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
