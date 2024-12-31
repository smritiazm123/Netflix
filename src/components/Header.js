import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  function handleSignOut()
  {
    signOut(auth).then(()=>
    {
      navigate("/");
    }).catch((error)=>
    {
      navigate("/error");
    })
  }

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName ,photoURL} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser);
        navigate('/')
      }
    });
    return()=>unsubscribe();
  }, []);
  
  return (
    <div className="flex justify-between align-middle absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img
        className="w-44"
        src={LOGO}
        alt="Logo"
      />
     {user && ( <div className="flex">
        <img className="w-12 h-12 pt-3 pr-3" alt="profileIcon" src={user.photoURL}/>
        <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
      </div>)}
    </div>
  );
};

export default Header;
