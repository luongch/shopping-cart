import Nav from "./Nav";
import Inventory from "../fixtures/inventory";
import Item from "./Item";
import '../styles/shop.css'
import uniqid from "uniqid"


function Shop(props) {
  let getInventory = () => {
    const imgFolder = require.context('../images', false)
    
    return Inventory.map(item => {
      const img = imgFolder(item.image.src)
      let myKey = uniqid();
      return <Item title={item.title} price={item.price} src={img} alt={item.image.alt} key={myKey} addToCart={props.addToCart}></Item>
    });
  }
  return (
    <div>
      <Nav></Nav>
      <div className="shop">
        {
          getInventory()
        }
      </div>        
    </div>
  );
}
  
  export default Shop;
  