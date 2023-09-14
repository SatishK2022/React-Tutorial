import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import userContext from "./context/userContext";
import { useState } from "react";

const AppLayout = () => {
  // const [user, setUser] = useState({
  //   name: "Satish Kumar",
  //   email: "satish@gmail.com"
  // })

  return (
    // <userContext.Provider value={{user, setUser}}>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    // </userContext.Provider>
  );
};

export default AppLayout;
