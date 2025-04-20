import React from "react";
import { LuConstruction } from "react-icons/lu";
const UnderConstruction = () => {
  return (
    <div>
      <div className="font-extrabold text-amber-50 text-6xl absolute  w-full h-40 bg-black/50 flex items-center justify-center">
        <h1 className="flex gap-4 items-center">
          <LuConstruction className="text-amber-400" />
          UNDER CONSTRUCTION
          <LuConstruction className="text-amber-400" />
        </h1>
      </div>
    </div>
  );
};

export default UnderConstruction;
