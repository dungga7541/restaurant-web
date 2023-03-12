/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import login_res from "../../../assets/images/background-login-res.png";
import "./Register.scss";
import { useState } from 'react';

import { auth } from '../../../firebase-config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signOut } from "firebase/auth";


  const Register = () => {
    const [registerEmail,setRegisterEmail]=useState("");
    const [registerPassword,setRegisterPassword] =useState("");

    const register = async (e)=>{
      try{
        e.preventDefault();
        e.stopPropagation();
          const user=await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      }catch(error){
        console.log(error);
      }
    };
  return (

    <div className='register'>
        <div className='background'>
            <img src={login_res} alt="login_res"/>
            <h2 >My Account</h2>
        </div>
        <div className='main_page'>
            <h3>Register</h3>
            <form className='register_form'>
              <div className='username'>
                <p className='username_title'>Username or email address *</p>
                <input type="text" placeholder='username...' onChange={(event)=>{
                  setRegisterEmail(event.target.value)
                }}
                />
              </div>
              <div className='password'>
                <p className='password_title'>Password</p>
                <input type="password" placeholder='password...' onChange={(event)=>{
                  setRegisterPassword(event.target.value)
                }}
                  
                />
              </div>
              <button className='btn_registry' onClick={register}><p>Registry</p></button>
            </form>
        </div>
    </div>
  )
}

export default Register;
