import { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import "./index.css";
import Error from "./components/Error";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Team from "./components/Team";
import RestaurantMenu from "./components/Restaurants";
import RestaurantInfo from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore  from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <RestaurantMenu /> },
      { path: "/about-us", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/team", element: <Team /> },
      { path: "/restaurant/:resId", element: <RestaurantInfo /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
