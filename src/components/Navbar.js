import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-300 to-blue-100 shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
      <h1 className="text-3xl font-bold text-gray-800">EventSpot Lite</h1>
        <div className="flex-grow max-w-md ml-4 flex items-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
