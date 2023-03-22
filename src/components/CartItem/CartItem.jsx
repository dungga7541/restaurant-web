import './cartItem.scss'
import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/reducers/cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
      <img className="cartItemImage" src={image} alt='item'/>
      <div className="cartItemInfo">
        <p className="cartItemTitle">{title}</p>
        <p className="cartItemPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItemIncrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItemRemoveButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem