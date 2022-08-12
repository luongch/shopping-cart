import Nav from "./Nav";
function ShoppingCart(props) {
  let {cart} = props
  const displayCart = () => {
    let temp = [];
    cart.forEach((value,key) => {
      temp.push(<div>{key},{value}</div>)
    });
    return temp;
  }
    return (
      <div>
        <Nav></Nav>
        <div>This is the shopping cart</div>
        {displayCart()}
      </div>
    );
  }
  
  export default ShoppingCart;