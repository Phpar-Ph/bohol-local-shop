import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [state, setState] = useState("Sign In");
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="absolute top-10 left-10 text-2xl font-bold hover:cursor-pointer hover:text-crimsonPink">
        <h1 onClick={() => navigate("/")}>Back to Home</h1>
      </div>
      <div className="w-full max-w-md h-fit border-2 border-gray-300 bg-white shadow-xl rounded-xl p-8">
        <div className="text-center mb-8">
          {state === "Sign Up" ? (
            <h1 className="text-4xl font-bold">Create Account</h1>
          ) : (
            <h1 className="text-4xl font-bold">Sign In Account</h1>
          )}
        </div>

        <form className="flex flex-col gap-6">
          {state === "Sign Up" ? (
            <input
              type="text"
              required
              placeholder="Full Name"
              className="p-4 text-xl border-2 border-gray-300 rounded-md font-medium drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-crimsonPink focus:border-crimsonPink w-full transition-all duration-300"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            required
            placeholder="Email"
            className="p-4 text-xl border-2 border-gray-300 rounded-md font-medium drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-crimsonPink focus:border-crimsonPink w-full transition-all duration-300"
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="p-4 text-xl border-2 border-gray-300 rounded-md font-medium drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-crimsonPink focus:border-crimsonPink w-full transition-all duration-300"
          />

          <button
            type="submit"
            className="mt-4 py-3 bg-crimsonPink text-white font-bold text-xl rounded-lg hover:bg-crimsonPink/80 transition-all duration-300"
          >
            {state}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-lg">
            {state === "Sign Up"
              ? "Already have an account? "
              : "Don't have an account? "}
            <span
              className="text-crimsonPink cursor-pointer underline hover:text-crimsonPink/80"
              onClick={() =>
                setState(state === "Sign Up" ? "Sign In" : "Sign Up")
              }
            >
              {state}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
