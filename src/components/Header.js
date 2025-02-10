import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react';
import { auth } from '../utilities/firebase'
import { useDispatch, useSelector }  from 'react-redux';
import { addUser, removeUser } from '../utilities/userSlice'
import { NETFLIX_LOGO, Supported_LANGUAGES, USER_AVTAR } from '../utilities/constant';
import { toggleGPTSearchView } from '../utilities/gptSlice';
import { changeLanguage } from '../utilities/configSlice';


const Header = () => {
  const gptShowValue =  useSelector((store) => store.gpt.showGptSearch)
 const navigate = useNavigate()
 const dispatch = useDispatch()
const  handleGptSearchClick = ()=>{
   dispatch(toggleGPTSearchView());
 }

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      //navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid , email , displayName , photoURL} = user;
        dispatch(addUser({uid: uid , email: email , displayName: displayName , photoURL: photoURL}));
          navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
         navigate("/")
        // ...
      }
  }) ;
  return ()=>unsubscribe();
  
} ,[])


const handleLanguageChange =(e)=>{
  dispatch(changeLanguage(e.target.value))

}
  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img 
    className="w-44 mx-auto md:mx-0"
    src={NETFLIX_LOGO} alt="logo"/>

{/* <div className="flex p-2">
      <img className="w-16 h-16 " src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="usericon"/>
      <button onClick={handleSignOut}className="font-bold text-white"> Sign Out</button>
    </div> */}
    {auth.currentUser && (
  <div className="flex p-2 justify-between">
   {  gptShowValue && <select className="p-2 bg-gray-900 text-white m-2" onChange={handleLanguageChange}>
      {Supported_LANGUAGES.map((lang)=>{
              return   <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
      })}
    </select>}
    <button className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mx-4 my-2" 
    onClick={handleGptSearchClick}>{  gptShowValue ? "Home page" : "GPT Search"}</button>
    <img className=" hidden md:block w-12 h-12" src={USER_AVTAR } alt="usericon" />
    <button onClick={handleSignOut} className="font-bold text-white ml-4">
      Sign Out
    </button>
  </div>
)}

    </div>
   
  )
}

export default Header
