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
                <td>{order.id}</td>
                <td>{order.table}</td>
                <td>{order.item}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>
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
