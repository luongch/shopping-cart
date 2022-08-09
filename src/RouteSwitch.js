import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
const RouteSwitch = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop count={count}/>} />
        <Route path="/shoppingcart" element={<ShoppingCart />}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;