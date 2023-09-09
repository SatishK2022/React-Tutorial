import "./index.css";
import ReactDOM from "react-dom/client";
import AppLayout from "./App.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
  // {
  //   path: '/about',
  //   element: <About />
  // },
  // {
  //   path: '/contact',
  //   element: <Contact />
  // }
  // {
  //   path: '*',
  //   element: <Error />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
