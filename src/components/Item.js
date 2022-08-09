import '../styles/shop.css'
import uniqid from "uniqid"

function Item(props) {
  let {title, price, src, alt, myKey} = props
  
  const generateQuantity = () => {
    let options = []
    for(let index = 1; index <= 10; index++) {    
      let myKey = uniqid();
      options.push(<option key={myKey} value={index}>{index}</option>)
      
    }
    return options;
  }
  return (
    <div className="item" key={myKey}>
      <div>
        <img src={src} alt={alt} width="300px"/>
      </div>
      <div>
        <div>{title}</div>
      </div>
      <div>
        <div>${price}</div>
      </div>
      <form action="">
        <label htmlFor="quantity">Quantity</label>
        <select id="quantity">
          {
            generateQuantity()
          }
        </select>
        <button type="button">Add to Cart</button>
      </form>
    </div>
  );
}

export default Item;
