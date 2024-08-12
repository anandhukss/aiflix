import React, { useState } from "react";
import Logo from "../assets/file.png";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import { reset, setAiRecommendation } from "../store/aiSlice";
import { signOut } from "firebase/auth";

function Header() {
  const user = useSelector((state) => {
    return state.user.currentUser;
  });

  const dispatch = useDispatch();

  const isAiEnabled = useSelector((store) => store.GPT.aiRecommendation);
  const [userAvailable, setUserAvailable] = useState(true);

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

  const toggleAi = () => {
    dispatch(reset());
    dispatch(setAiRecommendation(!isAiEnabled));
  };

  return (
    <div className="fixed top-0 px-8 sm:px-2 py-2 bg-gradient-to-b from-black w-full flex justify-between z-50 items-start lg:flex-col sm:bg-primary-bg">
      <img className="w-36" src={Logo}></img>

      {userAvailable && (
        <div className="flex items-center space-x-6 pt-4">
          <button
            onClick={toggleAi}
            className="p-4 bg-primary-bg text-white flex items-center space-x-2 rounded-xl shadow"
          >
            <span> {isAiEnabled ? "Browse" : "Recommend movies"}</span>

            {!isAiEnabled ? (
              <img
                className="h-5 w-5"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png"
                alt=""
              />
            ) : (
              <i className="fa-brands fa-youtube text-blue-200"></i>
            )}
          </button>

          <div>
            <div className="flex justify-center space-x-4 items-center  sm:flex-col sm:justify-center">
              <i
                className="fa fa-user text-red-800 fa-2x"
                aria-hidden="true"
              ></i>
              <div>
                <div className="text-white">{user?.displayName}</div>

                <span
                  onClick={() => signOutUser()}
                  className="text-red-600 hover:cursor-pointer hover:underline sm:pt-2 sm:text-xs"
                >
                  Sign out
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
