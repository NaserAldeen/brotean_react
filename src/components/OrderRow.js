import React from "react";

// Components
import OrderModal from "./OrderModal";

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
        Khaldiya, Block 3
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {order.total} KWD
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        <OrderModal orderItems={order.cart_items} />
      </td>
    </tr>
  );
};

export default OrderRow;
