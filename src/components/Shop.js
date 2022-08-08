import Nav from "./Nav";
import Inventory from "../fixtures/inventory";
import Item from "./Item";
import '../styles/shop.css'

function Shop() {        
    let getInventory = () => {
      const imgFolder = require.context('../images', false)
      return Inventory.map(item => {
        const img = imgFolder(item.image.src)
        return <Item title={item.title} price={item.price} src={img} alt={item.image.alt}></Item>
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
  