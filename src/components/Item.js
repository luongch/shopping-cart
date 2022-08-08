import '../styles/shop.css'

function Item(props) {
  let {title, price, src, alt} = props
  
  const generateQuantity = () => {
    let options = []
    for(let index = 1; index <= 10; index++) {    
      options.push(<option value={index}>{index}</option>)
      
    }
    return options;
  }
  return (
    <div className="item">
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
      </form>
    </div>
  );
}

export default Item;
