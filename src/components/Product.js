import React from "react";

export default function Product(props) {
  return (
    <tr>
      <td className="text-center">{props.product.name}</td>
      <td className="text-center">₹{props.product.price}</td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            props.decrementQuantity(props.index);
          }}
        >
          -
        </button>
        <button type="button" className="btn btn-warning">
          {props.product.quantity}
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            props.incrementQuantity(props.index);
          }}
        >
          +
        </button>
      </td>
      <td className="text-center">
        ₹{props.product.quantity * props.product.price}
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
