import React from "react";
import Logo from "../assets/file.png";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import {  signOut } from "firebase/auth";

function Header() {
  const user = useSelector((state) => {
    return state.user.currentUser;
  });

  const dispatch = useDispatch();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch(() => {
        // An error happened.
      });
  };

  return (
    <div className="fixed top-0 px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between z-50">
      <img className="w-36" src={Logo}></img>

      {user && (
        <div className="flex items-center space-x-2">
          <img src={user.photoURL} alt="user" className="h-6 w-6" />
          <div>{user.displayName}</div>
          <span
            onClick={() => signOutUser()}
            className="text-red-600 hover:cursor-pointer hover:underline"
          >
            Sign out
          </span>
        </div>
      )}
    </div>
  );
}

export default Header;
