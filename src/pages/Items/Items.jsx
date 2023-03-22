import './Items.scss'
import Item from '../../components/Item/Item';
import list_item_1 from "../../assets/images/item/image_itemsList_1.png"
import list_item_2 from "../../assets/images/item/image_itemsList_2.png"
import list_item_3 from "../../assets/images/item/image_itemsList_3.png"
import list_item_4 from "../../assets/images/item/image_itemsList_4.png"
import list_item_5 from "../../assets/images/item/image_itemsList_5.png"
import list_item_6 from "../../assets/images/item/image_itemsList_6.png"


// import { ShoppingCart } from '@mui/icons-material';
// import {useNavigate} from 'react-router-dom';
// import { useSelector } from 'react-redux';

 function Items() {

//   const navigate = useNavigate()
//   const cart = useSelector((state) => state.cart)

//   const getTotalQuantity = () => {
//     let total = 0
//     cart.forEach(item => {
//       total += item.quantity
//     })
//     return total
//   }
  return (
    <div className="items">
      <div className="itemsContainer">
        <div className="items_row">
          <Item
            id={1}
            title="Chicken Supreme Pizza"
            price={98}
            image={list_item_1}
          />
          
          <Item
            id={2}
            title="Hamburger Burger with Beef"
            price={29}
            image={list_item_2}
          />

          <Item
            id={3}
            title="Belgium waffles with strawberries"
            price={199}
            image={list_item_3}
          />
                  <Item
            id={4}
            title="Delicious food on a white plate"
            price={598}
            image={list_item_4}
          />

          <Item 
            id={5}
            title="Mutton or lamb biriyani"
            price={229}
            image={list_item_5}
          />
        
          <Item 
            id={6}
            title="Spicy fried tubtim fish salad"
            price={1094}
            image={list_item_6}
          />
        </div>
      </div>
    </div>
  )
}

export default Items