import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component'; 
import 'react-lazy-load-image-component/src/effects/blur.css'; 


const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (gifId) => {
    const updatedFavorites = favorites.filter((gif) => gif.id !== gifId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="flex flex-col items-center mt-20">
          
      <div className="flex bg-purple rounded-lg shadow-[0_0_40px_theme('colors.purple.700')] item-center w-[90%] sm:w-[50%] flex-col gap-8 justify-center items-center p-8 mb-4">
      <h1>Your favorite Gifs</h1>
        <Link to="/giphy">
        <button className="button hover:shadow-[0_0_50px_theme('colors.purple.700')] ">Not enough?</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[70%] mt-8 sm:w-[50%]">
        {favorites.map((gif) => (
          <div key={gif.id} className="relative">
            <LazyLoadImage src={gif.images.fixed_height.url} alt="GIF" className="w-full rounded-md h-[25vh]" />
            <button
              className="absolute p-2 text-white bg-red-700 rounded-full top-2 right-2 hover:bg-red-500 focus:outline-none"
              onClick={() => removeFromFavorites(gif.id)}
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Favorites;

// className="flex justify-center mb-4 text-white sm:text-1xl lg:text-3xl">