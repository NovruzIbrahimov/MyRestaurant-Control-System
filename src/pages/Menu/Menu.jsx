import menu from "../../data/menu";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <h2 className="mb-4">Menyu</h2>
      <div className="row">
        {menu.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="menu-card">
              <img src={item.image} alt={item.name} className="menu-img" />
              <h5 className="mt-2">{item.name}</h5>
              <p className="price">{item.price} ₼</p>
              <button className="btn btn-primary w-100">Əlavə et</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
