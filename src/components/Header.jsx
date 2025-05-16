const Header = () => {
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
            Home
          </li>
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            About Us
          </li>
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            Services
          </li>
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            Contact Us
          </li>
          <li className="text-slate-700 hover:text-slate-900 hover:scale-110 hover:border-b-2 border-orange-500 cursor-pointer transition-all duration-150">
            Team
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
