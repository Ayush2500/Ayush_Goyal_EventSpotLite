import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full mb-6">
      <input
        type="text"
        placeholder="🔍 Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 rounded-lg border-2 border-gray-200 shadow-sm transition-all duration-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-gray-700 placeholder-gray-500"
      />
      {searchTerm && (
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors duration-200">
          🔍
        </div>
      )}
    </div>
  );
};

export default SearchBar;
