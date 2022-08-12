import CartItem from "./CartItem";
function ShoppingCart(props) {
  let {cart} = props
  const displayCart = () => {
    let temp = [];
    cart.forEach((value,key) => {
      temp.push(<CartItem item={value}></CartItem>)
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