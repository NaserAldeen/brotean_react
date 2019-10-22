import React from "react";

// Components
import OrderRow from "./OrderRow";

const OrderHistory = ({ orders }) => {
  const orderRows = orders.map((order, index) => (
    <OrderRow key={index} index={index} order={order} address={order.address} />
  ));
  return (
    <div>
      <h5 className="text-center mt-3">Order History</h5>
      <table className="mt-1 table text-center">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Date</th>
            <th>Ship To</th>
            <th>Total</th>
            <th>Order Details</th>
          </tr>
        </thead>
        <tbody>{orderRows}</tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
