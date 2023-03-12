import React from 'react';
import "./Contact.scss";
import contact from "../../assets/images/image_contact_bg.png";
import { Facebook, Instagram, LinkedIn, LocalPhone, LockClock, Mail, Room, Twitter } from '@mui/icons-material';
import map from "../../assets/images/map.png";
import RoomIcon from '@mui/icons-material/Room';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
const Contact = () => {
  return (
    <div className='contact'>
        <div className='background'>
            <img src={contact} alt="contact"/>
            <h2 >CONTACT US</h2>
            <p className='sub_title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>do eius mod tempor incididunt ut labore et dolore magna.</p>
        </div>
        <div className='address'>
            <div className='leftColumn'>
                <p className='mainTitle'>ADDRESS</p>
                <div className='sp_title'>
                    <RoomIcon style={{ color:"#CC3333"}}/><p className='subTitle_1'>28 Seventh Avenue, Neew York, 10014</p>
                </div>
                <div className='sp_title'>
                    <LocalPhone style={{ color:"#CC3333"}}/><p className='subTitle_1'>+880 1630 225 015</p>
                </div>
                <div className='sp_title'>
                    <Mail style={{ color:"#CC3333"}}/><p className='subTitle_1'>resturents@gmail.com</p>
                </div>
                <p className='mainTitle'>WORKING HOURS</p>
                
                <div className='sp_title' >
                    <WatchLaterIcon style={{ color:"#CC3333"}}/>
                    <p className='subTitle'>7:30 am to 9:30pm on Weekdays</p>
                </div>
                <p className='mainTitle'>FOLLOW US</p>
                <div className='logoSocial'>
                    <p><Twitter style={{ color:"#CC3333"}}/></p>
                    <p><Facebook style={{ color:"#CC3333"}}/></p>
                    <p><Instagram style={{ color:"#CC3333"}}/></p>
                    <p><LinkedIn style={{ color:"#CC3333"}}/></p>
                </div>
            </div>
            <div className='rightColumn'>
                <img src={map} alt="map"/>
            </div>
        </div>
    </div>

  )
}

export default Contact
