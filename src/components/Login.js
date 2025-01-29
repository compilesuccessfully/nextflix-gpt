import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setisSignInForm(!isSignInForm);
    }
  return (
    <div>
     
      <Header/>
      <div className="absolute">
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"></img>
        </div>
         <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { !isSignInForm  && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
            <input type="text" placeholder="Enter Email Address" className="p-4 my-4 w-full bg-gray-700"/>
         
            <input type="password" placeholder="Enter Password" className="p-4 my-4 w-full bg-gray-700"/>
            <button  className="p-4 my-6 bg-red-700 w-full rounded-lg">{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> { isSignInForm ? "New to Netflix? Sign Up Now" : "Already regestered? Sign in now"}</p>

         </form>
    </div>
  )
}

export default Login
