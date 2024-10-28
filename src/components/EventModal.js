import React from 'react';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50" onClick={onClose}>
      <div 
        className="relative bg-gradient-to-br from-white to-gray-100 rounded-lg p-6 m-4 max-w-lg w-full shadow-xl transform transition-all duration-500 scale-105 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-colors duration-200"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img 
            className="w-full h-auto max-h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" 
            src={event.image} 
            alt={event.name} 
          />
        </div>

        <h2 className="font-extrabold text-4xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-center shadow-md">
          {event.name}
        </h2>
        <p className="text-indigo-700 text-center font-medium mt-2">{event.date}</p>
        <p className="text-gray-500 text-center italic">{event.location}</p>

        <p className="mt-4 text-gray-700 leading-relaxed text-justify text-lg">
          {event.description}
        </p>

        <button 
          className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
