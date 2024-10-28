import React from 'react';

const EventCard = ({ event, onClick }) => {
    return (
        <div
            className="max-w-lg transform transition duration-300 ease-in-out
        hover:scale-105 cursor-pointer
        gap-3 p-6 mt-10 ml-5 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] animate-fade-in"
            onClick={() => onClick(event)}
        >
            <img className="w-full h-64 object-cover rounded-t-xl" src={event.image} alt={event.name} />

            <div className="px-6 py-4 bg-white rounded-b-xl">
                <h3
                    className="font-extrabold text-3xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text 
                        mb-2 font-[Poppins, sans-serif]"
                >
                    {event.name}
                </h3>
                <p className="text-indigo-500 font-semibold text-lg font-[Roboto, sans-serif]">
                    {event.date}
                </p>
                <p className="text-gray-500 text-sm italic font-[Roboto, sans-serif]">
                    {event.location}
                </p>

                <button
                    className="mt-4 w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-md shadow-md 
            hover:from-indigo-600 hover:to-purple-700 transition duration-200 ease-in-out transform hover:scale-105"
                    onClick={() => onClick(event)}
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default EventCard;
