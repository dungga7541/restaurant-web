import React from 'react'
import login_res from "../../../assets/images/background-login-res.png";
import { auth } from '../../../firebase-config.js';
import { useState } from 'react';
import "./Login.scss";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [loginEmail,setLoginEmail]=useState("");
  const [loginPassword,setLoginPassword]=useState("");
  const [user,setUser]=useState({});
  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success('Login Successful !', {
        position: toast.POSITION.TOP_RIGHT
    });
};
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  });
  const signIn = async (e)=>{
    try{
      e.preventDefault();
      e.stopPropagation();
        const user=await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/");
      showToastMessage();
      console.log(user);
    }catch(error){
      console.log(error);
      if(error.code === 'auth/wrong-password'){
        toast.error('Please check the Password');
      }
      if(error.code === 'auth/user-not-found'){
        toast.error('Please check the Email');
      }
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email Already in Use');
      }
    }
  };

  return (
    <div className='login'>
        <div className='background'>
            <img src={login_res} alt="login_res"/>
            <h2 >My Account</h2>
        </div>
        <div className='main_page'>
            <h3>Login</h3>
            <form className='login_form'>
              <div className='username'>
                <p className='username_title'>Username or email address *</p>
                <input type="text" placeholder='username...' onChange={(event)=>{
                  setLoginEmail(event.target.value)
                }}/>
              </div>
              <div className='password'>
                <p className='password_title'>Password</p>
                <input type="password" placeholder='password...' onChange={(event)=>{
                  setLoginPassword(event.target.value)
                }}/>
              </div>
              <button className='btn_login' onClick={signIn}><p>Login</p></button>
              <div className='remember'>
                <input type='checkbox' />
                <p>Remember</p>
              </div>
              <div className='forgot_password'><p>Forgot password</p></div>
            </form>
        </div>
    </div>
  )
}

export default Login;
