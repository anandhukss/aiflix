import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignUpForm, setIsSignUpForm] = useState(false);

  const inputStyle =
    "w-full p-3 border border-blue-700 rounded-md bg-blue-800 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelStyle = "block text-white text-sm font-medium mb-2";

  const loginContainer = {
    backgroundImage:
      "url(https://plus.unsplash.com/premium_photo-1683740128672-7f1a4b824f5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <Header />
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
                  type="text"
                  id="name"
                  className={inputStyle}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label className={labelStyle} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={inputStyle}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className={labelStyle} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={inputStyle}
                placeholder="Enter your password"
                required
              />
            </div>
            <button className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {isSignUpForm ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <div className="mt-6">
            {isSignUpForm && (
              <a className="text-white">
                Already a user ?{" "}
                <button
                  onClick={() => setIsSignUpForm((prev) => (prev = !prev))}
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
                  onClick={() => setIsSignUpForm((prev) => (prev = !prev))}
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
