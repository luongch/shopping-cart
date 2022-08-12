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
        {displayCart()}
      </div>
    );
  }
  
  export default ShoppingCart;