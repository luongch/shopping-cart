import Nav from "./Nav";
function ShoppingCart(props) {
  console.log(props.count)
    return (
      <div>
        <Nav></Nav>
        <div>This is the shopping cart</div>
      </div>
    );
  }
  
  export default ShoppingCart;