import "./Header.css";

function Header({ onMenuClick }) {
  return (
    <header className="header bg-primary text-white p-3">
      <div className="header-inner d-flex justify-content-between align-items-center">
        <button
          className="burger btn btn-light d-lg-none"
          onClick={onMenuClick}
        >
          ☰
        </button>

        <h4 className="header-title mb-0">Restaurant Control</h4>

        <div className="header-icons d-flex gap-3">
          <span role="button">🔔</span>
          <span role="button">👤</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
