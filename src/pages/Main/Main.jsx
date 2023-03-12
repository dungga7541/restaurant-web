import React from 'react'
import slide from "../../assets/images/scroll.png";
import "./Main.scss";
import dishes_1 from "../../assets/images/image_Dishes_1.png";
import dishes_2 from "../../assets/images/image_Dishes_2.png";
import dishes_3 from "../../assets/images/image_Dishes_3.png";
import dishes_4 from "../../assets/images/image_Dishes_4.png";
import dishes_5 from "../../assets/images/image_Dishes_5.png";
import healthy_1 from "../../assets/images/image_richHealthy_1.png";
import healthy_2 from "../../assets/images/image_richHealthy_2.png";
import StarIcon from '@mui/icons-material/Star';
import offer_1 from "../../assets/images/image_bigOffer_1.png";
import offer_2 from "../../assets/images/image_bigOffer_2.png";
import offer_3 from "../../assets/images/image_bigOffer_3.png";
import special_1 from "../../assets/images/image_specials_1.png";
import ForwardIcon from '@mui/icons-material/Forward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import specialmanu_1 from "../../assets/images/image_specialManu_1.png";
import specialmanu_2 from "../../assets/images/image_specialManu_2.png";
import specialmanu_3 from "../../assets/images/image_specialManu_3.png";
import specialmanu_4 from "../../assets/images/image_specialManu_4.png";
import specialmanu_5 from "../../assets/images/image_specialManu_5.png";
import specialmanu_6 from "../../assets/images/image_specialManu_6.png";
import specialmanu_7 from "../../assets/images/image_specialManu_7.png";
import specialmanu_8 from "../../assets/images/image_specialManu_8.png";
import specialmanu_9 from "../../assets/images/image_specialManu_9.png";
import restaurant_1 from "../../assets/images/image_ourResturant_1.png";
import restaurant_2 from "../../assets/images/image_ourResturant_2.png";
import restaurant_3 from "../../assets/images/image_ourResturant_3.png";
import growth_1 from "../../assets/images/growth 1.png";
import cooking_1 from "../../assets/images/cooking 1.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import guest_1 from "../../assets/images/image_guests_2 (1).png";
import guest_2 from "../../assets/images/image_guests_2 (2).png";
import guest_3 from "../../assets/images/image_guests_3.png";
import { useState } from 'react';

const Main = () => {
  const [activeMenu,setActiveMenu]=useState("breakfast")
  const [activespMenu,setActivespMenu]=useState("burger")
  return (
    <div className='Main'>
      <div className='slider'> 
        <img src={slide} alt="imgslide"/>
      </div>
      <div className='food_items'>
        <div className='title'>
          <p className='sub_title'>
            Food Item
          </p>
          <p className='main_title'>
            Popular Dishes
          </p>
        </div>
        <div className='list_dishes'>
          <img src={dishes_1} alt="dish_1"/>
          <img src={dishes_2} alt="dish_2"/>
          <img src={dishes_3} alt="dish_3"/>
          <img src={dishes_4} alt="dish_4"/>
          <img src={dishes_5} alt="dish_5"/>
        </div>
      </div>
      <div className='total_news'>
        <div className='title'>
          <p className='sub_title'>
            RICH & HEALTHY
          </p>
        </div>
        <div className='news'>
          <div className='column_left'>
            <img src={healthy_1} alt="richHealthy_1"/>
          </div>
          <div className='column_right'>
            <div className='column_top'>
              <div className='news_title'>
                <p className='news_title_1'>
                Highest quality artisangrains, <br/>proteins & seasonal ingredients
                </p>
                <p className='news_title_2'>
                Righteous indignation and dislike men who are so beguiled and <br/>demoralized by the charms of pleasure of the moment, so blinded by <br/>desires, that they cannot foresee.
                </p>
              </div>
            </div>
            <div className='column_bottom'>
              <div className='left'>
                <p><StarIcon style={{ color: "#CC3333" }}/>Simple and easy to distinguish</p>
                <p><StarIcon style={{ color: "#CC3333" }}/>Pleasure of the moment blinded desire</p>
                <p><StarIcon style={{ color: "#CC3333" }}/>Able to do what we like best</p>
                <div>
                  <p className='btn_readmore'>Read more</p>
                </div>
              </div>
              <div className='right'>
                <img src={healthy_2} alt="richHealthy_2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='offer'>
        <div className='title'>
          <p className='main_title'>
            Bigg Offer
          </p>
          <p className='sub_title'>
            For in this week, take your food, buy your best one.
          </p>
        </div>
        <div className='list_offers'>
          <img src={offer_1} alt="offer_1"/>
          <img src={offer_2} alt="offer_2"/>
          <img src={offer_3} alt="offer_3"/>
        </div>
      </div>
      <div className='special_menu'> 
        <div className='title'>
          <p className='main_title'>
            SPECIALS
          </p>
          <p className='sub_title'>
            Check out our menu
          </p>
          <p className='sub_title_1'>
            Demoralized by the charms of pleasure of the moment so blinded except to some advantage.
          </p>
        </div>
        <div className='list_menus'>
          <p className={`${activeMenu ==="breakfast" ? "active" : ""}`} onClick={()=>setActiveMenu("breakfast")}>BREAKFAST</p>
          <p className={`${activeMenu ==="lunch" ? "active" : ""}`} onClick={()=>setActiveMenu("lunch")}>LUNCH</p>
          <p className={`${activeMenu ==="dinner"? "active" : ""}`} onClick={()=>setActiveMenu("dinner")}>DINNER</p>
          <p className={`${activeMenu ==="starters"? "active" : ""}`} onClick={()=>setActiveMenu("starters")}>STARTERS</p>
          <p className={`${activeMenu ==="beverages" ? "active" : ""}`} onClick={()=>setActiveMenu("beverages")}>BEVERAGES</p>
        </div>
        <div className='menu_price'>
          <div className='move_list'><ChevronLeftIcon className='arrow_icon'/></div>
            <div className='left'>
              <img src={special_1} alt="special_1"/>
              <p>VIEW ALL MENU <ForwardIcon style={{ }}/></p>
            </div>
          <div className='right'>
            <div className='item'>
              <div className='item_info'>
                <p className='text_1'>Gazpacho Garlic</p>
                <p className='text_2'>Chilled tomato, cucumber, garlic, red pepper soup.</p>
              </div>
              <div className='item_price'>
                <p>$55</p>
              </div>
              </div>
            <div className='item'>
              <div className='item_info'>
                <p className='text_1'>Pan Con Berenjina Frita</p>
                <p className='text_2'>Marinated seabass with sour sauce, dill & coriander on bread.</p>
              </div>
              <div className='item_price'>
                <p>$40</p>
              </div>
              </div>
            <div className='item'>
              <div className='item_info'>
                <p className='text_1'>New Lubina Marinada</p>
                <p className='text_2'>Fried aubergine with almond on bread (2 pieces).</p>
              </div>
              <div className='item_price'>
                <p>$45</p>
              </div>
              </div>
            <div className='item'>
              <div className='item_info'>
                <p className='text_1'>Gazpacho</p>
                <p className='text_2'>Atlantic cod fillet, chips, salad, tartare, lemon.</p>
              </div>
              
              <div className='item_price'>
                <p>$35</p>
              </div>
              </div>
            <div className='item'>
              <div className='item_info'>
                <p className='text_1'>Coconut Chia Bowl</p>
                <p className='text_2'>Marinated seabass with sour saucel & coriander on bread.</p>
              </div>
              <div className='item_price'>
                <p>$95</p>
              </div>
              </div>
            <div className='item'>
            <div className='item_info'>
                <p className='text_1'>New Lubina Marinada</p>
                <p className='text_2'>Atlantic cod fillet, chips, salad, tartare, lemon.</p>
              </div>
              <div className='item_price'>
                <p>$120</p>
              </div>
            </div>
            <div className='item'>
              <div className='item_info'>
                <p className='text_1'>Gazpacho Garlic</p>
                <p className='text_2'>Chilled tomato, cucumber, garlic, red pepper soup.</p>
              </div>
              <div className='item_price'>
                <p>$29</p>
              </div>
            </div>
          </div>
          <div  className='move_list'><ChevronRightIcon className='arrow_icon'/></div>
        </div>
      </div>
      <div className="special_alltime">  
        <div className='title'>
          <p className='main_title'>
            SPECIALS MENU FOR ALL TIME
          </p>
        </div>
        <div className='list_specials'>
          <div className='row_1'>
            <div className={`${activespMenu ==="burger" ? "active" : ""}`}  onClick={()=>setActivespMenu("burger")}>
              <img src={specialmanu_1} alt="specialmanu_1"/>
              <p>Burger</p>
            </div>
            <div className={`${activespMenu ==="fried" ? "active" : ""}`}  onClick={()=>setActivespMenu("fried")}>
              <img src={specialmanu_2} alt="specialmanu_2"/>
              <p>Fried chicken</p>
            </div>
            <div className={`${activespMenu ==="doner" ? "active" : ""}`}  onClick={()=>setActivespMenu("doner")}>
              <img src={specialmanu_3} alt="specialmanu_3"/>
              <p>Doner with <br/> Grilled Chicken</p>
            </div>
            <div className={`${activespMenu ==="Pizza" ? "active" : ""}`}  onClick={()=>setActivespMenu("Pizza")}>
              <img src={specialmanu_4} alt="specialmanu_4"/>
              <p>Pizza</p>
            </div>
            <div className={`${activespMenu ==="hotdog" ? "active" : ""}`}  onClick={()=>setActivespMenu("hotdog")}>
              <img src={specialmanu_5} alt="specialmanu_5"/>
              <p>Hot Dogs</p>
            </div>
            <div className={`${activespMenu ==="Chicken" ? "active" : ""}`}  onClick={()=>setActivespMenu("Chicken")}>
              <img src={specialmanu_6} alt="specialmanu_6"/>
              <p>Chicken <br/> Skewers</p>
            </div>
          </div>
          <div className='row_2'>
            <div className={`${activespMenu ==="salad" ? "active" : ""}`}  onClick={()=>setActivespMenu("salad")}>
              <img src={specialmanu_7} alt="specialmanu_7"/>
              <p>Greek Salad</p>
            </div>
            <div className={`${activespMenu ==="dahi" ? "active" : ""}`}  onClick={()=>setActivespMenu("dahi")}>
              <img src={specialmanu_8} alt="specialmanu_8"/>
              <p>Dahi Puri</p>
            </div>
            <div className={`${activespMenu ==="ice" ? "active" : ""}`}  onClick={()=>setActivespMenu("ice")}>
              <img src={specialmanu_9} alt="specialmanu_9"/>
              <p>Ice cream with <br/>Chocolate</p>
            </div>
            <div className={`${activespMenu ==="Cocktail" ? "active" : ""}`}  onClick={()=>setActivespMenu("Cocktail")}>
              <img src={specialmanu_1} alt="specialmanu_1"/>
              <p>Cocktail <br/> Glasses</p>
            </div>
          </div>
        </div>
      </div>
      <div className='ours_restaurant'>
        <div className='title'>
          <p className='main_title'>
            OUR RESTAURANT
          </p>

        </div>
        <div className='about_our'>
          <div className='column_left'>
            <div className='row_1'>
              <img src={restaurant_1} alt="restaurant_1"/>
              <img src={restaurant_2} alt="restaurant_2"/>
            </div>
            <div className='row_2'>
              <img src={restaurant_3} alt="restaurant_3"/>
            </div>
          </div>
          <div className='column_right'>
            <p className='info_our1'>For every specialoccasion there’s heritaste</p>
            <p className='info_our2'>Indignation and dislike men who are so beguiled demoralized by the charms of <br/>pleasure of the moment. Success Story.</p>
            <div className='info_cl_our1'>
              <div className='left_info'>
                <img className='img_info_our1' height={50} width={50} src={growth_1} alt="growth_1"/>
              </div>
              <div className='right_info'>
                <p className='main_title'>
                  Success Story
                </p>
                <p className='sub_title'>
                  Certain circumstances and owing to the claims of duty obligations of <br/>business it will frequently.
                </p>
                <p className='sub_title_1'>
                  Read More
                  <div className='icon_readmore'>                  
                    <ArrowForwardIcon/>
                  </div>
                </p>
              </div>
            </div>
            <div className='info_cl_our2'>
              <div className='left_info'>                
                <img className='img_info_our2' src={cooking_1} alt="cooking_1"/>
              </div>
              <div className='right_info'>
                <p className='main_title'>
                  Success Story
                </p>
                <p className='sub_title'>
                  Duty or the obligations of business it frequently occur pleasures have <br/>to be repudiated.                </p>
                <p className='sub_title_2'>
                  Read More
                  <div className='icon_readmore'>                  
                    <ArrowForwardIcon/>
                  </div>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='review'>
        <div className='title'>
          <p className='main_title'>
            Testimonial
          </p>
          <p className='sub_title'>
            Review form our guests
          </p>
        </div>
        <div className='total_review'>
          <div className='customer customer_1'>
            <img src={guest_2} alt="guest_1"/>
            <p className='title_1'>Robert M. Dixon</p>
            <p className='title_2'>Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...</p>
            <p><StarOutlinedIcon/><StarOutlinedIcon/><StarOutlinedIcon/><StarOutlinedIcon/><StarOutlineOutlinedIcon/></p>
          </div>
          <div className='customer customer_2'>
            <img src={guest_1} alt="guest_2"/>
            <p className='title_1'>Bernadette R. Martin</p>
            <p className='title_2'>Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...</p>
            <p><StarOutlinedIcon/><StarOutlinedIcon/><StarOutlinedIcon/><StarOutlinedIcon/><StarOutlineOutlinedIcon/></p>
          </div>
          <div className='customer customer_3'>
            <img src={guest_3} alt="guest_3"/>
            <p className='title_1'>Regina D. Leonardn</p>
            <p className='title_2'>Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...</p>
            <p><StarOutlinedIcon/><StarOutlinedIcon/><StarOutlinedIcon/><StarOutlinedIcon/><StarOutlineOutlinedIcon/></p>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Main
