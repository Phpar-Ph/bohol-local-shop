import React, { useState } from "react";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <img
          onClick={toggleDropdown}
          src="https://imgs.search.brave.com/7_-25qcHnU9PLXYYiiK-IwkQx93yFpp__txSD1are3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzYz/LzM2MF9GXzY0Njc2/MzgzX0xkYm1oaU5N/NllwemIzRk00UFB1/RlA5ckhlN3JpOEp1/LmpwZw"
          alt=""
          className="w-10 h-10 rounded-full"
        />
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none"
          role="menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
              role="menuitem"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
              role="menuitem"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
              role="menuitem"
            >
              License
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700
                            hover:bg-gray-100"
              role="menuitem"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
