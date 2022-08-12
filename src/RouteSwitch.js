import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import Nav from "./components/Nav";
const RouteSwitch = () => {
  const [cart, setCart] = useState(new Map())
  useEffect(()=>{
    console.log("routerswitch: cart has been updated")
  },[]);
  const removeFromCart = (item) => {
    let newCart = createNewCart();
    newCart.delete(item)
    setCart(newCart);
  }
  const addToCart = (item) => {
    // debugger
    let selected = document.getElementById(item.title);
    // // let name = item.querySelector('.title').innerText
    let quantity = parseInt(selected.querySelector('#quantity').value)
    let newCart = createNewCart();

    let temp = {...item}
    temp.quantity = quantity

    newCart.set(item.title, temp);
    setCart(newCart);
    console.log(cart)
  }
  const incrementQuantity = (item) => {
    let newCart = createNewCart();
    let newQuantity = newCart.get(item) + 1;
    newCart.set(item, newQuantity);
    setCart(newCart);
  }
  const decrementQuantity = (item) => {
    let newCart = createNewCart();
    let newQuantity = newCart.get(item) - 1;
    if (newQuantity == 0) {
      newCart.delete(item)
    }
    else {
      newCart.set(item, newQuantity);
    }
    setCart(newCart);
  }
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