import React from "react";

const OrderRow = ({ order, index }) => {
  return (
    <tr>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {index + 1}
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {order.completed ? "Completed" : "Incomplete"}
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {order.total} KWD
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        <button className="btn btn-sm btn-primary">View</button>
      </td>
    </tr>
  );
};

export default OrderRow;
