import './item.scss'
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/reducers/cartSlice';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './../../firebase-config';
import { toast } from 'react-toastify';

function Item({id, title, image, price}) {

  const dispatch = useDispatch()
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
        }
    })
    return () => {
        listen();
    }
}, []);
console.log(authUser)
  return (
    <div className="item">
      <div className="itemInfo">
        <p className="itemTitle">{title}</p>
        <p className="itemPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={() =>{authUser !==null ?  dispatch(addToCart({id, title, image, price})):toast.error('Please login first !!')}}>
          Add to Cart
        </button>

  
        
      </div>
      <img src={image}alt="item"/>

    </div>
  )
}

export default Item