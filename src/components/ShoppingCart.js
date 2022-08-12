import CartItem from "./CartItem";
function ShoppingCart(props) {
  let {cart, removeFromCart, incrementQuantity, decrementQuantity} = props
  const displayCart = () => {
    let temp = [];
    cart.forEach((value,key) => {
      temp.push(<CartItem item={value} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}></CartItem>)
    });
    return temp;
  }
    return (
      <div>
        {displayCart()}
      </div>
    );
  }
  
  export default ShoppingCart;