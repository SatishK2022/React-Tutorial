import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  return (
    <>
      <nav className="flex items-center justify-between px-5 md:px-8 lg:px-10 shadow-lg fixed top-0 z-20 bg-gradient-to-br from-orange-200 to-white inset-x-0">
        <Link to="/">
          <img
            className="w-16 md:w-20 lg:w-24 mix-blend-multiply"
            src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
            alt="Logo"
          />
        </Link>
        <ul className="md:flex items-center gap-8 hidden ">
          <li className="text-lg font-semibold hover:text-orange-500 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg font-semibold hover:text-orange-500 transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="text-lg font-semibold hover:text-orange-500 transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-lg font-semibold hover:text-orange-500 transition duration-300">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="text-lg font-semibold hover:text-orange-500 transition duration-300">
            <Link to="/cart">Cart</Link>
          </li>
          <li>{isOnline ? "🟢" : "🔴"}</li>
          {isLoggedIn ? (
            <button className="bg-orange-500 text-white font-semibold py-2 px-5 rounded hover:bg-orange-600 transition duration-300" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          ) : (
            <button className="bg-orange-500 text-white font-semibold py-2 px-5 rounded hover:bg-orange-600 transition duration-300" onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          )}
        </ul>
        <div className="md:hidden text-2xl text-slate-700 cursor-pointer">
          <FaBars />
        </div>
      </nav>
    </>
  );
};

export default Header;
