import CartItem from "./CartItem";
import uniqid from "uniqid"

function ShoppingCart(props) {
  let {cart, removeFromCart, incrementQuantity, decrementQuantity} = props
  const displayCart = () => {
    
    let temp = [];
    cart.forEach((value) => {
      let myKey = uniqid();

      temp.push(<CartItem key={myKey} item={value} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}></CartItem>)
    });
    return temp;
  }

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((value,key)=>{
      total += (value.quantity * value.price)
    });
    return <div>Total: ${total}</div>
  }
    return (
      <div>
        {displayCart()}
        {calculateTotal()}
        <button>Check out</button>
      </div>
    );
  }
  
  export default ShoppingCart;