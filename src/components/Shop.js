import Nav from "./Nav";
import Inventory from "../fixtures/inventory";

function Shop() {
    const imgFolder = require.context('../images', false)
    
    return (
      <div>
        <Nav></Nav>
        {
          Inventory.map(item => {
            const img = imgFolder(item.image.src)
            return (<img src={img} alt={item.image.alt} width="300px"/>)
          })
        }
      </div>
    );
  }
  
  export default Shop;
  