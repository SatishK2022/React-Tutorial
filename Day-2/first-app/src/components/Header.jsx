import { useState } from "react"
import { Link } from "react-router-dom"
import useOnline from "../hooks/useOnline"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const isOnline = useOnline();
    return (
      <>
      <nav className='container'>
        <Link to="/">
          <img src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" alt="Logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {(isOnline)? '🟢': '🔴'}
          </li>
          {
            (isLoggedIn) ? <button className="btn" onClick={() => setIsLoggedIn(false)}>Logout</button> : <button className="btn" onClick={() => setIsLoggedIn(true)}>Login</button>
          }   
          
        </ul>
      </nav>
      </>
    )
  }

export default Header