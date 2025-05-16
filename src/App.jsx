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

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/about-us", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/team", element: <Team /> },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
