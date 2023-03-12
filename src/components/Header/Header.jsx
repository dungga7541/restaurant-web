import "./Header.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, Routes } from "react-router-dom";
import Login from "../../pages/Auth/Login/Login";
import Main from './../../pages/Main/Main';
import logo from "../../assets/images/logo.png"
import Register from './../../pages/Auth/Register/Register';
import Items from "../../pages/Items/Items";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './../../firebase-config';
import Cart from './../../pages/Cart/Cart';
import { ReactDOM } from 'react-dom/client';

const Header = () => {

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
    const notification = ()=>{
        return(
            <div className="notification">
                <div className="notification-icon">
                    <ShoppingCartIcon />
                </div>
                <div className="notification-text">
                    <p>Your cart is empty</p>
                </div>
            </div>
        )
    }
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successfully')
            return(
                <div className="notification">
                    <div className="notification-icon">
                        <ShoppingCartIcon />
                    </div>
                    <div className="notification-text">
                        <p>Your cart is empty</p>
                    </div>
                </div>
            )
        }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <div className="header">
            
            <nav>
                <Link to="/" element={Main}><img src={logo} width={112} height={75} alt="logo" style={{ textDecoration: 'none' }} /></Link>
                <div className="center">
                    <Link to="/" element={Main} style={{ textDecoration: 'none' }}><span>HOME</span></Link>
                    <Link to="/about" element={About} style={{ textDecoration: 'none' }}><span>ABOUT</span></Link>
                    <Link to="/items" element={Items} style={{ textDecoration: 'none' }}><span>ITEMS</span></Link>
                    <Link to="/cart" element={Cart} style={{ textDecoration: 'none' }}><span>CART</span></Link>
                    <Link to="/contact" element={Contact} style={{ textDecoration: 'none' }}><span>CONTACT</span></Link>
                </div>
                <div className="right">
                    <span><ShoppingCartIcon /> </span>
                    {authUser !==null ?
                    <div>
                        {authUser ? <div>
                                        <p>Hello {authUser.email}</p>
                                        <button onClick={userSignOut}>Sign Out</button>
                                    </div> : <p><button onClick={userSignOut}>Signed Out</button></p>
                        }
                    </div>:
                    <div className="auth">
                        <Link to="login" element={<Login />} style={{ textDecoration: 'none' }}><span>Log in</span></Link>
                        <Link to="register" element={<Register />} style={{ textDecoration: 'none' }}><span>Register</span></Link>
                    </div>}
                </div>
            </nav>
        </div>
    )
}

export default Header;