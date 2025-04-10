import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Product from "./components/Product";
import { Routes, Route } from "react-router";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowlogin] = useState(false);
  return (
    <div>
      {showLogin ? <Login isClose={setShowlogin} /> : <></>}
      <Navbar setShowlogin={setShowlogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Product /> */}
    </div>
  );
}

export default App;
