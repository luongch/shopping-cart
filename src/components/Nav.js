
import { Link } from "react-router-dom";
function Nav() {
    return (
      <div>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/Shop">Shop</Link>
            <Link to="/ShoppingCart">
                <span>
                    <img src={require("../images/cart.png")} alt="Shopping Cart" />
                </span>
            </Link>
        </nav>
      </div>
    );
  }
  
  export default Nav;
  