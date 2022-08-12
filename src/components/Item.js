import '../styles/shop.css'
import uniqid from "uniqid"

function Item(props) {
  let {item, myKey} = props
  
  const imgFolder = require.context('../images', false)
  const img = imgFolder(item.image.src)

  const generateQuantity = () => {
    let options = []
    for(let index = 1; index <= 10; index++) {    
      let myKey = uniqid();
      options.push(<option key={myKey} value={index}>{index}</option>)
      
    }
    return options;
  }
  return (
    <div className="item" key={myKey} id={item.title}>
      <div>
        <img src={img} alt={item.image.alt} width="300px"/>
      </div>
      <div className='title'>
        <div>{item.title}</div>
      </div>
      <div>
        <div>${item.price}</div>
      </div>
      <form action="">
        <label htmlFor="quantity">Quantity</label>
        <select id="quantity">
          {
            generateQuantity()
          }
        </select>
        <button type="button" onClick={event => props.addToCart(item)}>Add to Cart</button>
      </form>
    </div>
  );
}
 
export default Item;
