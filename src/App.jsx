import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowlogin] = useState(false);
  return (
    <div>
      {showLogin ? <Login isClose={setShowlogin} /> : <></>}
      <Navbar setShowlogin={setShowlogin} />
      <Home />

      <Product />
    </div>
  );
}

export default App;
