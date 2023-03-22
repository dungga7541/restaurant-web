import { React} from 'react';
import "./EditUser.scss";
import profileUser from "../../assets/images/profile_image.png"

const EditUser = () => {

    return (
        <div className='container'>
            <div className='editUser'>
                <div className="leftEditUser">
                    <div className='imgUser'>
                        <img src={profileUser} alt="dsadsa"/>
                        <p className='nameUser'>David Matin</p>
                        <p className='subNameUser'>Web developer</p>
                    </div>
                    <div className="navbarUser">
                        <p>Profile</p>
                        <p>My Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                        <p>Help Desk</p>
                        <p>Logout</p>
                    </div>
                </div>
                <div className="rightEditUser">
                    <div className='mainTitle'><p>BASIC INFORMATION</p></div>
                    <div className='profileUser'>
                        <div className='nameUser'>
                            <label >User Full Name*</label>
                            <input type='text' placeholder='David Matin' /> 
                        </div>
                        {/* onChange={(event)=>{setNameUser(event.target.value)}} */}
                        <div className='titleUser'>
                            <div className='info'>
                                <label >Professional title*</label>
                                <input type='text' placeholder='Web developer' />
                            </div>
                            {/* onChange={(event)=>{setTitleUser(event.target.value)}} */}
                            <div className='info'>
                                <label >Age*</label>
                                <input type='text' placeholder='38' />
                            </div>
                            {/* onChange={(event)=>{setAgeUser(event.target.value)}} */}
                        </div>
                        <div className='aboutUser'>
                            <label >About</label>
                            <textarea placeholder='Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></textarea>
                        </div>
                    </div>
                    <div className='mainTitle'><p>CONTACT INFORMATION</p></div>
                    <div className='contactInfoUser'>
                        <div className='contactUser'>
                            <div className='info'>
                                <label >Contact Number</label>
                                <input type='text' placeholder='+880 1630 2250 15' />
                            </div>
                            {/* onChange={(event)=>{setNameUser(event.target.value)}} */}
                            <div className='info'>
                                <label >Email Address</label>
                                <input type='text' placeholder='shaheen.au2@gmail.com' />
                            </div>
                            {/* onChange={(event)=>{setNameUser(event.target.value)}} */}
                        </div>
                        <div className='contactUser'>
                            <div className='info'>
                                <label >Country</label>
                                <input type='text' placeholder='Country name' />
                            </div>
                            {/* onChange={(event)=>{setNameUser(event.target.value)}} */}
                            <div className='info'>
                                <label >Postcode</label>
                                <input type='text' placeholder='112233'/>
                            </div>
                            {/* onChange={(event)=>{setNameUser(event.target.value)}} */}
                        </div>
                        <div className='contactUser'>
                            <div className='info'>
                                <label >City</label>
                                <input type='text' placeholder='Ho Chi Minh' />
                            </div>
                            {/* onChange={(event)=>{setNameUser(event.target.value)}} */}
                            <div className='info'>
                                <label >Full Address</label>
                                <input type='text' placeholder='Dhaka, Bnagladesh' />
                            </div>
                            {/* onChange={(event)=>{setNameUser(event.target.value)}} */}
                        </div>
                    </div>
                    <div className='saveSettings'>
                        <button >Save Settings</button>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser
