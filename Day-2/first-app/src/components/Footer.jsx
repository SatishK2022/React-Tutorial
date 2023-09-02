const Footer = () => {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row justify-evenly py-5 px-10 gap-5 bg-slate-200">
        <h2 className="text-xl md:text-2xl text-center lg:text-3xl font-bold w-full md:w-2/5">
          For better experience,download the Food Villa app now
        </h2>
        <div className="flex items-center gap-5 flex-wrap">
          <img
            className="w-full md:w-44 lg:w-52 h-14 object-contain"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
          />
          <img
            className="w-full md:w-44 lg:w-52 h-14 object-contain"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
          />
        </div>
      </div>

      <div className="grid align-top grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-14 py-12 bg-black text-gray-300 px-5 md:px-10 lg:px-20">
        <div className="flex flex-col gap-4">
          <img
            className="w-16 md:w-20 lg:w-24 mix-blend-difference"
            src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
            alt="Logo"
          />
          <p className="text-sm">Food Villa is your ultimate food delivery companion, revolutionizing the way you experience dining from the comfort of your own space. With a vast array of restaurants, cuisines, and dishes at your fingertips.</p>
          <p className="w-full">© 2023 Food Villa Pvt. Ltd</p>
        </div>

        <ul className=" flex flex-col gap-2 ">
          <h2 className="text-white text-xl font-semibold mb-2">Company</h2>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">About</li>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">Careers</li>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">Team</li>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">Instamart</li>
        </ul>

        <div>
          <ul className=" flex flex-col gap-2">
            <h2 className="text-white text-xl font-semibold mb-2">Contact Us</h2>
            <li className="cursor-pointer transition duration-300 hover:translate-x-1">Help & Support</li>
            <li className="cursor-pointer transition duration-300 hover:translate-x-1">Partner with Us</li>
            <li className="cursor-pointer transition duration-300 hover:translate-x-1">Ride With Us</li>
          </ul>
          <ul className=" flex flex-col gap-2 mt-10 transition ease-in-out duration-700">
            <h2 className="text-white text-xl font-semibold mb-2">Legal</h2>
            <li className="cursor-pointer transition duration-300 hover:translate-x-1">Terms & Conditions</li>
            <li className="cursor-pointer transition duration-300 hover:translate-x-1">Cookie Policy</li>
            <li className="cursor-pointer transition duration-300 hover:translate-x-1">Privacy Policy</li>
          </ul>
        </div>
        <ul className=" flex flex-col gap-2 transition ease-in-out duration-700">
          <h2 className="text-white text-xl font-semibold mb-2">We Deliver To:</h2>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">Banglore</li>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">Hydrabad</li>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">Gurgaon</li>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">Delhi</li>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">Mumbai</li>
          <li className="cursor-pointer transition duration-300 hover:translate-x-1">Pune</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
