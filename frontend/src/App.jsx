import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
