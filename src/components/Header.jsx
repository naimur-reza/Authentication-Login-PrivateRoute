import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext) || {};

  return (
    <>
      <div className="navbar bg-neutral bg-opacity-30 ">
        <div className="flex-1 ">
          <a className="btn btn-ghost normal-case text-xl">GullYBoy</a>
          <div className="font-semibold">
            <Link to={"/dashboard"}>Dashboard</Link>
          </div>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <h1 className="text-lg font-medium text-gray-100">{user?.email}</h1>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              {user ? (
                <li>
                  {" "}
                  <Link onClick={logout}>Logout</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link to={"/register"}>Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
