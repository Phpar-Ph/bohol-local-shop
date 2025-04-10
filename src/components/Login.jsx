import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Login({ isClose }) {
  const [CurrentState, setCurrentState] = useState("Login");
  return (
    <div className="absolute w-full h-screen bg-black/30 z-1 flex items-center justify-center">
      <div className="w-[45rem] h-fit bg-white rounded-2xl text-2xl p-10 font-secondary">
        {/* LOGIN */}
        <form action="">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-extrabold">{CurrentState}</h2>
            <div>
              <IoMdClose
                onClick={() => isClose(false)}
                className="cursor-pointer text-4xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10 ">
            {CurrentState === "Sign up" ? (
              <input
                type="text"
                placeholder="Your name"
                required
                className="border-2 border-gray-300 p-4 rounded-lg"
              />
            ) : (
              <></>
            )}

            <input
              type="text"
              placeholder="Your email"
              required
              className="border-2 border-gray-300 p-4 rounded-lg"
            />
            <input
              type="password"
              placeholder="Enter password"
              required
              className="border-2 border-gray-300 p-4 rounded-lg"
            />
          </div>
          <div>
            <button className="mt-10 bg-amber-300 w-full p-4 rounded-lg text-center">
              {CurrentState === "Log in" ? "Log in" : "Create account"}
            </button>
          </div>
          <div className="text-center pt-6 font-bold text-2xl">
            {CurrentState === "Login" ? (
              <p>
                Create a new account?
                <span
                  onClick={() => setCurrentState("Sign up")}
                  className="text-amber-900 cursor-pointer"
                >
                  Click here
                </span>
              </p>
            ) : (
              <p>
                Already had an account?
                <span
                  onClick={() => setCurrentState("Login")}
                  className="text-amber-900 cursor-pointer"
                >
                  Log in here
                </span>
              </p>
            )}
          </div>
        </form>
        {/* CLOSE */}
      </div>
    </div>
  );
}

export default Login;
