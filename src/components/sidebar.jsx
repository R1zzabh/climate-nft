import React, { useState } from 'react';

function Sidebar({ visible }) {
  return (
    <div
      className={`h-screen w-64 bg-gray-800 text-white ${visible ? '' : 'hidden'}`}
    >
      <div className="p-6">
        <h1 className="text-3xl font-bold">My App</h1>
      </div>
      <nav className="mt-10">
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Home
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Profile
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Settings
        </a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Dashboard
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;     