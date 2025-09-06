import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  FaClipboardList,
  FaCog,
  FaHome,
  FaSignOutAlt,
  FaUtensils,
} from "react-icons/fa";

// function Sidebar() {
//   return (
//     <div className="sidebar d-flex flex-column p-3">
//       <h2 className="sidebar-logo">🍴 Resto</h2>
//       <ul className="nav flex-column">
//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             Dashboard
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/tables" className="nav-link">
//             Masalar
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/menu" className="nav-link">
//             Menyu
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/orders" className="nav-link">
//             Sifarişlər
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/reports" className="nav-link">
//             Hesabatlar
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/users" className="nav-link">
//             İstifadəçilər
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/tables", label: "Tables", icon: <FaClipboardList /> },
    { path: "/menu", label: "Menu", icon: <FaUtensils /> },
    { path: "/orders", label: "Orders", icon: <FaCog /> },
    { path: "/reports", label: "Reports", icon: <FaCog /> },
    { path: "/users", label: "Users", icon: <FaCog /> },
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
          <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center">
            <FaSignOutAlt className="me-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar (tam ekran açılır) */}
      {isOpen && (
        <div className="sidebar sidebar-mobile position-fixed top-0 start-0 w-100 h-100 bg-dark text-white p-4 z-3 d-flex flex-column">
          <button
            className="btn btn-light mb-4 align-self-end"
            onClick={onClose}
          >
            ✖
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
            <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center">
              <FaSignOutAlt className="me-2" /> Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
