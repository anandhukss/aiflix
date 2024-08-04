import React, { useRef, useState } from "react";
import PasswordChecker from "../elements/PasswordChecker";
import { checkLogin } from "../utils/validateForm";
import { inputStyle, labelStyle, loginContainer } from "../utils/styles";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BROWSE } from "../constants/routes";
import Loader from "../elements/Loader";

function Login() {
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const email = useRef(null);
  const fullName = useRef(null);
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState(false);

  const handleButtonClick = () => {
    const error = checkLogin(email.current.value, password);
    setErrorMessage(error);

    if (error) {
      return;
    }

    setLoadings(true);

    if (isSignUpForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL:
              "https://cdn4.vectorstock.com/i/1000x1000/53/08/user-avatar-red-icon-vector-8825308.jpg",
          })
            .then(() => {
              const { displayName, email, photoURL, uuid } = auth.currentUser;

              // Profile updated!
              dispatch(
                setUser({
                  displayName,
                  email,
                  photoURL,
                  uuid,
                })
              );

              navigate(BROWSE);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            })
            .finally(() => setLoadings(false));
        })
        .catch((error) => {
          setErrorMessage(error.message);
        })
        .finally(() => setLoadings(false));
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password)
        .then((userCredential) => {
          const { displayName, email, photoURL, uuid } = userCredential.user;
          dispatch(setUser({ displayName, email, photoURL, uuid }));
          navigate(BROWSE);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        })
        .finally(() => setLoadings(false));
    }
  };

  const resetForm = () => {
    setPassword("");
    email.current.value = "";
    setErrorMessage(null);
    setShowPassword(undefined);
  };

  return (
    <>
      <div
        style={loginContainer}
        className="flex justify-center items-center w-full h-screen"
      >
        <div className="bg-blue-900 bg-opacity-95 p-8 rounded-md shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-white mb-6">
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </h1>
          <form>
            {isSignUpForm && (
              <div className="mb-4">
                <label className={labelStyle} htmlFor="name">
                  Full Name
                </label>
                <input
                  ref={fullName}
                  type="text"
                  id="name"
                  className={inputStyle}
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div className="mb-4">
              <label className={labelStyle} htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                ref={email}
                className={inputStyle}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6 relative">
              <label className={labelStyle} htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={inputStyle}
                placeholder="Enter your password"
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {isFocused && password && isSignUpForm && (
                <PasswordChecker password={password} />
              )}

              <div className="absolute bottom-3 right-2 cursor-pointer text-white">
                {showPassword ? (
                  <i
                    className="fa-solid fa-eye-slash"
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                ) : (
                  <i
                    className="fa fa-eye"
                    aria-hidden="true"
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                )}
              </div>
            </div>

            {
              <div className="text-red-600 text-xs mb-1">
                {errorMessage || <span>&nbsp;</span>}
              </div>
            }
            <Loader loading={loadings}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleButtonClick();
                }}
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isSignUpForm ? "Sign Up" : "Sign In"}
              </button>
            </Loader>
          </form>
          <div className="mt-6">
            {isSignUpForm && (
              <a className="text-white">
                Already a user ?{" "}
                <button
                  onClick={() => {
                    resetForm();
                    setIsSignUpForm((prev) => (prev = !prev));
                  }}
                  className="text-blue-400 hover:underline"
                >
                  SignIn Now
                </button>
              </a>
            )}

            {!isSignUpForm && (
              <a className="text-white">
                New to AIFLIX ?{" "}
                <button
                  onClick={() => {
                    setIsSignUpForm((prev) => (prev = !prev));
                    resetForm();
                  }}
                  className="text-blue-400 hover:underline"
                >
                  Sign Up Now
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
