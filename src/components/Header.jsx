import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <header className="shadow-lg">
      <nav className="flex max-w-6xl justify-between items-center mx-auto p-2">
        <img
          className="w-20 cursor-pointer transition-all duration-150 hover:scale-110"
          src="/logo.png"
          alt="yummzy logo"
        />
        <ul className="flex justify-center items-center gap-7 text-xl font-medium">
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            <Link to={"/services"}> Services</Link>
          </li>
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            <Link to={"/team"}>Team</Link>
          </li>
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            <Link to={"/cart"}>🛒({cartItems.length})</Link>
          </li>
          {console.log(cartItems)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
