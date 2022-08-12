
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Nav(props) {
  let {cart} = props;

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
  