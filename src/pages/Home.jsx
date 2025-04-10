import React from "react";
import Product from "../components/Product";

function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://7uomswwzdn.ufs.sh/f/jqqibgGpBsTYDKy59wGX35NXvbKCh4gjdiyG6TUPeZl2aERp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "50vh",
        }}
        className="flex justify-center items-center"
      >
        <h1 className="font-primary font-black text-primary text-8xl drop-shadow-xl">
          Shop Local, Experience Bohol
        </h1>
      </div>
      <Product />
    </div>
  );
}

export default Home;
