import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function AddToCard({ CardData }) {
  console.log("add to cart ", CardData);

  return (
    <>
      <h5>Your Cart is Empty</h5>
      {CardData.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </>
  );
}

export default AddToCard;
