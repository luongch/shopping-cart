import Nav from "./Nav";
import Inventory from "../fixtures/inventory";
import Item from "./Item";
import '../styles/shop.css'

function Shop() {
    const imgFolder = require.context('../images', false)
    
    let getInventory = () => {
      return Inventory.map(item => {
        let title = item.title;
        let price = item.price;
        let alt = item.image.alt;
        const img = imgFolder(item.image.src)
        // return (<img src={img} alt={item.image.alt} width="300px"/>)
        return <Item title={title} price={price} src={img} alt={alt}></Item>
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
  