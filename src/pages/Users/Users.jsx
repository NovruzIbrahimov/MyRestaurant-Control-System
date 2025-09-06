import usersData from "../../data/users";
import "./Users.css";

function Users() {
  return (
    <div className="container users-container">
      <h2>İstifadəçilər</h2>
      <div className="row">
        {usersData.map((user) => (
          <div key={user.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div className="card user-card h-100">
              <img src={user.avatar} className="card-img-top" alt={user.name} />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <span className="badge bg-primary">{user.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
