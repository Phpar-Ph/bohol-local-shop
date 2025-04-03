import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Login({ isClose }) {
  const [CurrentState, setCurrentState] = useState("Log in");
  return (
    <div className="absolute w-full h-screen bg-black/30 z-1 flex items-center justify-center">
      <div className="w-[45rem] h-3/5 bg-white rounded-2xl text-2xl p-4">
        {/* LOGIN */}
        <form action="">
          <div>
            <h2>{CurrentState}</h2>
          </div>

          <div>
            {CurrentState === "Sign up" ? (
              <input type="text" placeholder="Your name" required />
            ) : (
              <></>
            )}

            <input type="text" placeholder="Your email" required />
            <input type="password" placeholder="Enter password" required />
          </div>
          <div>
            <button>
              {CurrentState === "Log in" ? "Log in" : "Create account"}
            </button>
          </div>
          <div>
            {CurrentState === "Log in" ? (
              <p>
                Create a new accountt?
                <span onClick={() => setCurrentState("Sign up")}>
                  Click here
                </span>
              </p>
            ) : (
              <p>
                Already had an accountt?
                <span onClick={() => setCurrentState("Log in")}>
                  Log in here
                </span>
              </p>
            )}
          </div>
        </form>
        {/* CLOSE */}
        <div>
          <IoMdClose
            onClick={() => isClose(false)}
            className="cursor-pointer text-5xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
