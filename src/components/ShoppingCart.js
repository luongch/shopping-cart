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
      </div>
    );
  }
  
  export default ShoppingCart;