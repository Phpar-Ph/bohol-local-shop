import React from "react";
import hero from "../assets/bg-hero.jpg";

function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "50vh",
        }}
        className="flex justify-center items-center text-white text-8xl font-extrabold"
      >
        <h1>Shop Local, Experience Bohol</h1>
      </div>
    </div>
  );
}

export default Home;
