import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  FaChair,
  FaChartBar,
  FaClipboardList,
  FaHome,
  FaSignOutAlt,
  FaTimes,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { path: "/", label: "Ana Səhifə", icon: <FaHome /> },
    { path: "/tables", label: "Masalar", icon: <FaChair /> },
    { path: "/menu", label: "Menyu", icon: <FaUtensils /> },
    { path: "/orders", label: "Sifarişlər", icon: <FaClipboardList /> },
    { path: "/reports", label: "Hesabatlar", icon: <FaChartBar /> },
    { path: "/users", label: "İstifadəçilər", icon: <FaUsers /> },
  ];

  return (
    <>
      <aside className="sidebar sidebar-desktop col-lg-2 d-none d-lg-flex flex-column bg-dark text-white p-3">
        <div className="sidebar-logo mb-4 text-center">
          <h3 className="fw-bold">🍴 Logo</h3>
        </div>

        <ul className="sidebar-links list-unstyled flex-grow-1">
          {menuItems.map((item, idx) => (
            <li key={idx} className="mb-3">
              <Link
                to={item.path}
                className="sidebar-link d-flex align-items-center text-white text-decoration-none"
              >
                <span className="me-2">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer mt-auto">
          <button className="btn btn-danger d-flex align-items-center justify-content-center">
            <FaSignOutAlt className="me-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar (tam ekran açılır) */}

      <div
        className={`sidebar sidebar-mobile position-fixed top-0 start-0 w-100 h-100 bg-dark text-white p-4 z-3 d-flex flex-column ${
          isOpen ? "open" : ""
        }`}
      >
        <button className="btn btn-light mb-4 align-self-end" onClick={onClose}>
          {/* ✖ */}
          <FaTimes size={20} />
        </button>

        <div className="sidebar-logo mb-4 text-center">
          <h3 className="fw-bold">🍴 Logo</h3>
        </div>

        <ul className="sidebar-links list-unstyled flex-grow-1">
          {menuItems.map((item, idx) => (
            <li key={idx} className="mb-3" onClick={onClose}>
              <Link
                to={item.path}
                className="sidebar-link d-flex align-items-center text-white text-decoration-none"
              >
                <span className="me-2">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer mt-auto">
          <button className="btn btn-danger d-flex align-items-center justify-content-center">
            <FaSignOutAlt className="me-2" /> Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
