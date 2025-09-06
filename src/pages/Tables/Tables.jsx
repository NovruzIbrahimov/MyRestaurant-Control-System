import tables from "../../data/tables";
import "./Tables.css";

function Tables() {
  return (
    <div className="tables-container">
      <h2 className="mb-4">Masalar</h2>
      <div className="row">
        {tables.map((table) => (
          <div key={table.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div
              className={`table-card ${
                table.status === "dolu" ? "occupied" : "free"
              }`}
            >
              <h5>{table.number}</h5>
              <p>Status: {table.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tables;
