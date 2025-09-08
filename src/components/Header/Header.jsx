import { FaBars, FaBell, FaUser } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ onMenuClick }) {
  return (
    <header className="header bg-primary text-white p-3">
      <div className="header-inner d-flex justify-content-between align-items-center">
        <button
          className="burger btn btn-light d-lg-none"
          onClick={onMenuClick}
        >
          {/* ☰ */}
          <FaBars size={20} />
        </button>

        <h4 className="header-title mb-0">
          <Link to="/" className="text-white text-decoration-none">
            Restoran Nəzarəti
          </Link>
        </h4>

        <div className="header-icons d-flex gap-3">
          {/* <span role="button">🔔</span>
          <span role="button">👤</span> */}
          <FaBell size={20} role="button" />
          <FaUser size={20} role="button" />
        </div>
      </div>
    </header>
  );
}

export default Header;
