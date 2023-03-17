/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useSelector } from 'react-redux'
import {increment,decrement} from "../../redux/counter";

const createItems = () => {
  const {count} =useSelector(state=>state.counter);
  const dispatch = useSelector(dispatch);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}


export default createItems
