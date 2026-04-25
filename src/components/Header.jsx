import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-center gap-6">
      <Link className="hover:text-blue-400" to="/">Про мене</Link>
      <Link className="hover:text-blue-400" to="/my-city">Моє місто</Link>
      <Link className="hover:text-blue-400" to="/my-future">Моє майбутнє</Link>
    </header>
  );
}

export default Header;