import { useState } from "react"

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
      <>
      <nav className='container'>
        <a href="/">
          <img src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" alt="Logo" />
        </a>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {
            (isLoggedIn) ? <button className="btn" onClick={() => setIsLoggedIn(false)}>Logout</button> : <button className="btn" onClick={() => setIsLoggedIn(true)}>Login</button>
          }   
          
        </ul>
      </nav>
      </>
    )
  }

export default Header