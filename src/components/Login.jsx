import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signIn, goWithGoogle, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        toast.success("Login Successful");
      })
      .catch((err) => {
        toast.error("Wrong Password!");
      });
  };
  if (user) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content max-w-6xl mx-auto flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-secondary">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleForm} className="card-body">
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
              <label className="">
                <br />
                <span className="text-xs">
                  New to here? <br />
                  <Link className="underline font-semibold" to={"/register"}>
                    Register Now
                  </Link>
                </span>
                <div
                  onClick={goWithGoogle}
                  className="pt-5 font-semibold flex cursor-pointer w-fit gap-2 items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    width={25}
                  />
                  <p className="text-sm">Continue with google</p>
                </div>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent btn-outline">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
