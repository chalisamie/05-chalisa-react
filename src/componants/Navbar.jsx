import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 h-screen flex-grow w-full h-1">
      <ul className="flex justify-center p-10 ">
        <li>
          <Link to="/" className="text-white mr-4 p-10 text-5xl">
            Home
          </Link>
        </li>
        <li>
          <Link to="/owner" className="text-white text-5xl">
            Owner
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
