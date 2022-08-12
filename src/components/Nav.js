
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Nav(props) {
  let {cart} = props;
  console.log("cart in nav", cart)
  useEffect(()=>{
    console.log("nav bar: cart has been updated")
  },[cart]);
    return (
      <div>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/Shop">Shop</Link>
            <Link to="/ShoppingCart">
                <span>
                    {cart.size}<img src={require("../images/cart.png")} alt="Shopping Cart" />
                </span>
            </Link>
        </nav>
      </div>
    );
  }
  
  export default Nav;
  