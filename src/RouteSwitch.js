import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import Nav from "./components/Nav";
const RouteSwitch = () => {
  const [cart, setCart] = useState(new Map())
  // useEffect(()=>{

  // },[]);
  const removeFromCart = (item) => {
    let newCart = cart;
    newCart.delete(item)
    setCart(newCart);
  }
  const addToCart = (title) => {
    let item = document.getElementById(title);
    // let name = item.querySelector('.title').innerText
    let quantity = parseInt(item.querySelector('#quantity').value)
    let newCart = cart;
    newCart.set(title, quantity);
    setCart(newCart);
    console.log(cart)
  }
  const incrementQuantity = (item) => {
    let newCart = cart;
    let newQuantity = newCart.get(item) + 1;
    newCart.set(item, newQuantity);
    setCart(newCart);
  }
  const decrementQuantity = (item) => {
    let newCart = cart;
    let newQuantity = newCart.get(item) - 1;
    if (newQuantity == 0) {
      newCart.delete(item)
    }
    else {
      newCart.set(item, newQuantity);
    }
    setCart(newCart);
  }

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home cart={cart}/>} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>} />
        <Route path="/shoppingcart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;