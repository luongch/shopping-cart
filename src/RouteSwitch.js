import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import Nav from "./components/Nav";
const RouteSwitch = () => {
  const [cart, setCart] = useState(new Map())

  const removeFromCart = (item) => {
    let newCart = createNewCart();
    newCart.delete(item.title)
    setCart(newCart);
  }

  const addToCart = (item) => {
    let selected = document.getElementById(item.title);
    let quantity = parseInt(selected.querySelector('#quantity').value)
    if(cart.get(item.title)) {
      incrementQuantity(cart.get(item.title), quantity)
    }
    else {
      let newCart = createNewCart();

      let temp = {...item}
      temp.quantity = quantity

      newCart.set(item.title, temp);
      setCart(newCart);
    }
  }
  const incrementQuantity = (item, quantity) => {
    let newCart = createNewCart();
    let temp = {...item}
    temp.quantity = temp.quantity+quantity

    newCart.set(item.title, temp);
    setCart(newCart);
  }
  const decrementQuantity = (item) => {
    let newCart = createNewCart();
    let temp = {...item}
    temp.quantity = temp.quantity-1

    if (temp.quantity == 0) {
      newCart.delete(item.title)
    }
    else {
      newCart.set(item.title, temp);
    }
    setCart(newCart);
  }

  /**React won't update the state if you pass by reference so a new object must be created */
  const createNewCart = () => {
    let newCart = new Map();
    cart.forEach((value,key) => {
      newCart.set(key, value);
    });
    return newCart;
  }

  return (
    <BrowserRouter>
      <Nav cart={cart}></Nav>
      <Routes>
        <Route path="/" element={<Home cart={cart}/>} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/shoppingcart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;