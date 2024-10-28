import React, { useState, useEffect } from 'react';
import { events } from './data';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import Slider from './components/Slider';
import Footer from './components/Footer';

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      const results = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(results);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div
      className="app min-h-screen p-6 bg-cover bg-fixed bg-center flex flex-col items-center"
    >
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="w-full max-w-5xl mt-12">
        <Slider />
      </div>

      <div className={`flex flex-wrap justify-center mt-12 w-full max-w-5xl animate-fade-in ${selectedEvent ? 'blur-md' : ''}`}>
        {loading ? (
          <Spinner />
        ) : filteredEvents.length === 0 ? (
          <p className="text-gray-600 text-lg">No events found. Try a different search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
            ))}
          </div>
        )}
      </div>
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        <Footer/>
    </div>
  );
};

export default App;
