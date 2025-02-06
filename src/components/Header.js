import React from 'react'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react';
import { auth } from '../utilities/firebase'
import { useDispatch }  from 'react-redux';
import { addUser, removeUser } from '../utilities/userSlice'
import { NETFLIX_LOGO } from '../utilities/constant';


const Header = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch()

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
  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img 
    className="w-44"
    src={NETFLIX_LOGO} alt="logo"/>

{/* <div className="flex p-2">
      <img className="w-16 h-16 " src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="usericon"/>
      <button onClick={handleSignOut}className="font-bold text-white"> Sign Out</button>
    </div> */}
    {auth.currentUser && (
  <div className="flex p-2">
    <img className="w-16 h-16" src={auth.currentUser.photoURL} alt="usericon" />
    <button onClick={handleSignOut} className="font-bold text-white ml-4">
      Sign Out
    </button>
  </div>
)}

    </div>
   
  )
}

export default Header
