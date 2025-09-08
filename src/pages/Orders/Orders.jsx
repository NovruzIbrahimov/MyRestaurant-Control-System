import orders from "../../data/orders";
import "./Orders.css";

function Orders() {
  return (
    <div className="orders-container">
      <h2 className="mb-4">Sifarişlər</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Masa</th>
              <th>Yemək</th>
              <th>Miqdar</th>
              <th>Qiymət (₼)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td data-label="#">{order.id}</td>
                <td data-label="Masa">{order.table}</td>
                <td data-label="Yemək">{order.item}</td>
                <td data-label="Miqdar">{order.qty}</td>
                <td data-label="Qiymət (₼)">{order.price}</td>
                <td data-label="Status">
                  <span className={`status-badge ${order.status}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
