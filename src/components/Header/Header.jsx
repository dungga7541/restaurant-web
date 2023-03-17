import "./Header.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
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
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [open, setHandleOpen] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const [linkCart,setLinkCart]= useState("");

    const showToastMessage = () => {
        toast.success('Sign Out Successful', {
            position: toast.POSITION.TOP_RIGHT
        });
        toast.error('Sign Out Successful', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
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
    const setLink=()=>{
        console.log(authUser);
        if(authUser!==null) {
            setLinkCart("/cart");
        }else{
            setLinkCart("/");
            toast.error('Please login first !!')
        }
    }
    const handleOpen = () => {
        setHandleOpen(!open);
        console.log(open)
    };
    const userSignOut = () => {
        signOut(auth).then(() => {
            toast.success("Sign Out Successful");
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
                <Link className="logo" to="/" element={Main}><img src={logo} width={112} height={75} alt="logo" style={{ textDecoration: 'none' }} /></Link>

                <div className="center">
                        <Link to="/" element={Main} style={{ textDecoration: 'none' }}><span>HOME</span></Link>
                        <Link to="/about" element={About} style={{ textDecoration: 'none' }}><span>ABOUT</span></Link>
                        <Link to="/items" element={Items} style={{ textDecoration: 'none' }}><span>ITEMS</span></Link>
                        <Link to="/items" element={Items} style={{ textDecoration: 'none' }}><span>ITEMS</span></Link>
                        <Link to="/contact" element={Contact} style={{ textDecoration: 'none' }}><span>CONTACT</span></Link>
                </div>
                <div className="right">
                    <Link to={linkCart} element={Cart} style={{ textDecoration: 'none' }}><span onClick={setLink}><ShoppingCartIcon /> </span></Link>
                    {authUser !==null ?
                    <div>
                        {authUser ? <div className="userLogin"  onClick={handleOpen}>
                                        <p>Hello {authUser.email}</p>
                                        <div className="dropdown">
                                        {open ===true ?
                                        //false ===close
                                        <div className="btnDropDown" onClick={handleOpen}><ExpandLessIcon style={{ width: "20px",height:"20px" }} />
                                            {open ? (
                                                <ul className="menu">
                                                    <li className="menu-item">
                                                        <button>Info</button>
                                                    </li>
                                                    <li className="menu-item">
                                                        <button onClick={userSignOut}>Sign Out  </button>
                                                    </li>
                                                </ul>
                                            ) : null}
                                        </div>
                                        :
                                        <div className="btnDropDown"> <ExpandMoreIcon style={{ width: "20px",height:"20px" }} /></div>}
                                        </div>
                                    </div>
                                    : <p><button onClick={userSignOut}>Signed Out</button></p>
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