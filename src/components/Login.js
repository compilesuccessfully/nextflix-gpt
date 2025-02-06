import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { checkValidData } from '../utilities/validate';
import { useRef } from 'react';
import { useDispatch} from 'react-redux'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilities/firebase"
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { addUser } from '../utilities/userSlice';
import { USER_AVTAR } from '../utilities/constant';

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage , seterrorMessage] = useState();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSignInForm = ()=>{
        setisSignInForm(!isSignInForm);
    }
    const handleButtonClick= ()=>{
        //valiadte the data
      const msg =  checkValidData(email.current.value , password.current.value);
      seterrorMessage(msg);
      if(msg) return;
      if(!isSignInForm){
           //sign up
           createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVTAR
    }).then(() => {
      // Profile updated!
      const {uid , email , displayName , photoURL} = auth.currentUser;
      console.log(auth.currentUser);
      dispatch(addUser({uid: uid , email: email , displayName: displayName , photoURL: photoURL}));
      navigate("/browse")
      // ...
    }).catch((error) => {
      // An error occurred
      seterrorMessage(error.message)
      // ...
    });
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
      }
      else{
          // sign in
          signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   // navigate("/browse")
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + "-" + errorMessage)
  });


      }
      console.log(msg);
        //  console.log(password);
    }
  return (
    <div>
     
      <Header/>
      <div className="absolute">
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"></img>
        </div>
         <form onSubmit ={(e) => e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm  && <input ref={name}type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
            <input ref={email} type="text" placeholder="Enter Email Address" className="p-4 my-4 w-full bg-gray-700"/>
         
            <input ref={password} type="password" placeholder="Enter Password" className="p-4 my-4 w-full bg-gray-700"/>
            <p  className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button  className="p-4 my-6 bg-red-700 w-full rounded-lg" 
            onClick = {handleButtonClick}>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> { isSignInForm ? "New to Netflix? Sign Up Now" : "Already regestered? Sign in now"}</p>

         </form>
    </div>
  )
}

export default Login
