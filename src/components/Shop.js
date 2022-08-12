import Inventory from "../fixtures/inventory";
import Item from "./Item";
import '../styles/shop.css'
import uniqid from "uniqid"


function Shop(props) {
  let getInventory = () => {    
    return Inventory.map(item => {      
      let myKey = uniqid();
      return <Item item={item} key={myKey} addToCart={props.addToCart}></Item>
    });
  }
  return (
    <div>
      <div className="shop">
        {
          getInventory()
        }
      </div>        
    </div>
  );
}
  
  export default Shop;
  