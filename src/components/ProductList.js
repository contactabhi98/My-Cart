import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <table className="table mt-3">
      <thead className="table-primary">
        <tr>
          <th className="text-center" scope="col">
            Product Name
          </th>
          <th className="text-center" scope="col">
            Price
          </th>
          <th className="text-center" scope="col">
            Quantity
          </th>
          <th className="text-center" scope="col">
            Total
          </th>
          <th className="text-center" scope="col">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {props.listOfProduct.length > 0 ? (
          props.listOfProduct.map((product, i) => (
            <Product
              product={product}
              key={i}
              incrementQuantity={props.incrementQuantity}
              decrementQuantity={props.decrementQuantity}
              removeItem={props.removeItem}
              index={i}
            />
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              <h1>Please add items to cart</h1>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
