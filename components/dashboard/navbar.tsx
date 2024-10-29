import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white py-4 px-6 shadow-md flex justify-end items-center space-x-4">
      <div className="flex items-center space-x-3">
        <h3 className="text-xl font-bold">Kavindu</h3>
        <button className="bg-[#0E46A3] text-white py-2 px-4 rounded-md hover:bg-[#094292]">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
