import './item.scss'
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/reducers/cartSlice';

function Item({id, title, image, price}) {

  const dispatch = useDispatch()

  return (
    <div className="item">
      <div className="itemInfo">
        <p className="itemTitle">{title}</p>
        <p className="itemPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={() => dispatch(addToCart({id, title, image, price}))}>
          Add to Cart
        </button>
      </div>
      <img src={image}alt="item"/>

    </div>
  )
}

export default Item