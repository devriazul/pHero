import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { BiSlider } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import useCart from "../../hooks/useCart";

const Nav = () => {
  const [user] = useAuthState(auth);
  const [cart, setCart] = useCart(user?.email);
  let subTotal = 0;
  cart.map((o) => {
    if (!o.isPaid) {
      subTotal = o.totalPrice + subTotal;
    }
  });
  // console.log(cart);
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="navbar bg-base-100  lg:px-20">
      <div className=" navbar-start">
        {location.pathname.includes("dashboard")
          ? user && (
              <label
                htmlFor="dashboardSlider"
                className="btn btn-ghost btn-circle avatar drawer-button lg:hidden"
              >
                <BiSlider size={20} />
              </label>
            )
          : ""}

        <Link to="/" className="btn btn-ghost normal-case text-3xl p-0">
          eTools
        </Link>
      </div>

      <div className=" navbar-end">
        {/* Desktop Version Menu  */}
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="services">Services</Link>
            </li>
            <li>
              <Link to="blogs">Blogs</Link>
            </li>
            <li>
              <Link to="about">My Portfolio</Link>
            </li>
            {user && (
              <li>
                <Link to="dashboard">Dashboard</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="login" className="btn btn-outline btn-primary">
                  Login
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="signup" className="btn btn-error text-black-100 ml-4">
                  Create Account
                </Link>
              </li>
            )}
          </ul>
        </div>
        {/* Cart  */}
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </label>
            <div
              tabIndex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cart.length} Items</span>
                <span className="text-info">Subtotal:${subTotal}</span>
                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Menu  */}
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-slate-600  bg-opacity-50">
                <img src={user?.photoURL} alt={user?.displayName}/>
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            </ul>
          </div>
        )}
        {/* Mobile Version Menu  */}
        <div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="services">Services</Link>
              </li>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
              <li>
                <Link to="about">My Portfolio</Link>
              </li>
              {user && (
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
              )}
              {!user && (
                <li>
                  <Link to="login" className="btn btn-outline btn-primary">
                    Login
                  </Link>
                </li>
              )}
              {!user && (
                <li>
                  <Link to="signup" className="btn btn-error text-black-100 ml-4">
                    Create Account
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
