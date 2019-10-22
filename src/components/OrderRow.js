import React from "react";

// Components
import OrderModal from "./OrderModal";

const OrderRow = ({ order, address, index }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  //   const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Satur"];
  let timestamp = new Date(order.date);
  //   const day = days[timestamp.getDay()];
  const date = timestamp.getDate();
  const month = months[timestamp.getMonth()];
  const year = timestamp.getFullYear();
  let hour = timestamp.getHours();
  let meridiem = "a.m.";
  if (hour > 12) {
    hour -= 12;
    meridiem = "p.m.";
  }
  let minute = timestamp.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  const datestamp = month + ". " + date + ", " + year;
  timestamp = hour + ":" + minute + " " + meridiem;

  return (
    <tr className="">
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {index + 1}
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {order.completed ? "Completed" : "Pending"}
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {order.date && datestamp + " " + timestamp}
      </td>
      <td style={{ verticalAlign: "middle", paddingTop: 5, paddingBottom: 5 }}>
        {address.area}, Block {address.block}
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
