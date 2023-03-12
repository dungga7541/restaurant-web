import React, { useState } from "react";
import "./Item.scss";
const Item = ({ question }) => {
  return (
    <div className="Items">
        <div className="column_left" >
            <h3>{question.title}</h3>
            <p className="sub_title_1">{question.infos}</p>
            <p className="sub_title_2">{question.price}</p>
        </div>
        <div className="column_right">
            <img src={question.img} alt="itemList_1"/>
        </div>
    </div>
  );
};

export default Item;