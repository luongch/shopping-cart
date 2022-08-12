
function CartItem(props) {
    let {item, removeFromCart, incrementQuantity,decrementQuantity} = props
    const imgFolder = require.context('../images', false)
    const img = imgFolder(item.image.src)

    return (
      <div>
        <img src={img} alt={item.image.alt} width="100px"/>
        <div>{item.title}</div>
        <div>
            <span>Quantity: </span>
            <span><button onClick={effect => {decrementQuantity(item)}}>-</button></span>
            <span>{item.quantity}</span>
            <span><button onClick={effect => {incrementQuantity(item)}}>+</button></span>
        </div>
        <div>
            <button onClick={effect => {removeFromCart(item)}}>Remove</button>
        </div>
      </div>
    );
  }
  
  export default CartItem;
  