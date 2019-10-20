import React from "react";
import { Link } from "react-router-dom";

const OrderModalRow = ({ item }) => {
  return (
    <tr>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        <img style={{ height: "50px" }} alt="" src={item.image} />
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        <Link to={`/products/${item.product_id}`}>{item.item}</Link>
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {item.price} KWD
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {item.quantity}
      </td>
    </tr>
  );
};

export default OrderModalRow;
