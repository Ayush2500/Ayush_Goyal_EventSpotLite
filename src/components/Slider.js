import React, { useState, useEffect } from 'react';
import image1 from '../assests/image1.jpg';
import image2 from '../assests/image2.jpg';
import image3 from '../assests/image3.avif';

const Slider = () => {
  const images = [
    { id: 1, url: image2, alt: 'Image 1' },
    { id: 2, url: image1, alt: 'Image 2' },
    { id: 3, url: image3, alt: 'Image 3' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider relative w-full max-w-screen-2xl h-[300px] overflow-hidden shadow-lg rounded-lg mx-auto">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-105"
      />
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-800 text-white p-3 rounded-full transition duration-300 shadow-lg"
      >
        ‹
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-800 text-white p-3 rounded-full transition duration-300 shadow-lg"
      >
        ›
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((image, index) => (
          <span
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition duration-300 ${
              currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
