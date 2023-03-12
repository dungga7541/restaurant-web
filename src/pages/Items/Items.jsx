import React from 'react'
import "./Items.scss";
import login_res from "../../assets/images/background-login-res.png";
import Item from "./Item";
import data from "./../../data";
const Items = () => {

  return (
    <div className='Items_menu'>
        <div className='background'>
            <img src={login_res} alt="login_res"/>
            <h2>ITEMS</h2>
        </div>
        <div className='items_menu_info'>
          <div className='title'>
            <p className='main_title'>
              It’s the food and groceries you Love, delivered
            </p>
          </div>
          <div className='search_bar'>
            <input className='search_input' type="text" placeholder='Search your Items'/>
            <div className='btn_go'><p>Go</p></div>
          </div>
          <div className='food_items'>
            {data.map((question) => (
              <Item question={question} key={question.id} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Items;
