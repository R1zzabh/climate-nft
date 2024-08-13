import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-black rounded-md p-6 border-2 border-white"
      style={{ fontSize: "18px", fontWeight: "bold", fontFamily: "sans-serif" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-[#F7F7F7]">CompanyName</div>
        <div className="hidden md:flex space-x-8">
          <button
            className="bg-black text-[#F7F7F7] hover:text-[#F2F2F2] hover:underline transition py-2 px-4"
          >
            Home
          </button>
          <button
            className="bg-black text-[#F7F7F7] hover:text-[#F2F2F2] hover:underline transition py-2 px-4"
          >
            About
          </button>
          <button
            className="bg-black text-[#F7F7F7] hover:text-[#F2F2F2] hover:underline transition py-2 px-4"
          >
            Services
          </button>
          <button
            className="bg-black text-[#F7F7F7] hover:text-[#F2F2F2] hover:underline transition py-2 px-4"
          >
            Contact
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="bg-black text-[#F7F7F7] focus:outline-none py-2 px-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <button
            className="bg-black text-[#F7F7F7] hover:text-[#F2F2F2] hover:underline transition py-2 px-4 w-full"
          >
            Home
          </button>
          <button
            className="bg-black text-[#F7F7F7] hover:text-[#F2F2F2] hover:underline transition py-2 px-4 w-full"
          >
            About
          </button>
          <button
            className="bg-black text-[#F7F7F7] hover:text-[#F2F2F2] hover:underline transition py-2 px-4 w-full"
          >
            Services
          </button>
          <button
            className="bg-black text-[#F7F7F7] hover:text-[#F2F2F2] hover:underline transition py-2 px-4 w-full"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;