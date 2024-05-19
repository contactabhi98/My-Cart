import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const initialListOfProduct = [
    {
      price: 9999,
      name: "Redmi",
      quantity: 0,
    },
    {
      price: 57000,
      name: "iPhone13",
      quantity: 0,
    },
    {
      price: 25000,
      name: "Samsung",
      quantity: 0,
    },
    {
      price: 8999,
      name: "Lava",
      quantity: 0,
    },
  ];

  const [listOfProduct, setListOfProduct] = useState(initialListOfProduct);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newListOfProduct = [...listOfProduct];
    let newTotalAmount = totalAmount;
    newListOfProduct[index].quantity++;
    newTotalAmount += newListOfProduct[index].price;
    setTotalAmount(newTotalAmount);
    setListOfProduct(newListOfProduct);
  };

  const decrementQuantity = (index) => {
    const newListOfProduct = [...listOfProduct];
    let newTotalAmount = totalAmount;
    if (newListOfProduct[index].quantity > 0) {
      newListOfProduct[index].quantity--;
      newTotalAmount -= newListOfProduct[index].price;
    }
    setTotalAmount(newTotalAmount);
    setListOfProduct(newListOfProduct);
  };

  const resetQuantity = () => {
    const newListOfProduct = [...listOfProduct];
    newListOfProduct.map((products) => {
      products.quantity = 0;
    });
    setTotalAmount(0);
    setListOfProduct(newListOfProduct);
  };

  const removeItem = (index) => {
    const newListOfProduct = [...listOfProduct];
    let newTotalAmount = totalAmount;
    // Calculate the amount to subtract before removing the item
    newTotalAmount -=
      newListOfProduct[index].quantity * newListOfProduct[index].price;
    // Remove the item
    newListOfProduct.splice(index, 1);
    setListOfProduct(newListOfProduct);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newListOfProduct = [...listOfProduct];
    newListOfProduct.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setListOfProduct(newListOfProduct);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          listOfProduct={listOfProduct}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
