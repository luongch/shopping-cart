
function CartItem(props) {
    let {item} = props
    const imgFolder = require.context('../images', false)
    const img = imgFolder(item.image.src)

    return (
      <div>
        <img src={img} alt={item.image.alt} width="300px"/>
        <div>{item.title}</div>
        <div>
            <span><button>-</button></span>
            <span>{item.quantity}</span>
            <span><button>+</button></span>
        </div>
        <div>
            <button>Remove</button>
        </div>
      </div>
    );
  }
  
  export default CartItem;
  