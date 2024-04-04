import React, { useState } from "react";
import { useGiphySearch } from "../hooks/useGiphySearch";

const GiphyPage = () => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const { searchGifs } = useGiphySearch();
  const [favorites, setFavorites] = useState([]) 


  const handleSearch = async () => {
    const foundGifs = await searchGifs(query);
    setGifs(foundGifs);
  };

  const addToFavorites = (gif) => {
    const yourFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem("favorites", JSON.stringify([...yourFavorites, gif]))
  }



  return (
    <div className="flex flex-col items-center mt-20 ">
      <div className="flex bg-purple rounded-lg shadow-[0_0_40px_theme('colors.purple.700')] item-center w-[50%] flex-col gap-8 justify-center items-center p-8 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for?"
          className="p-4 rounded-md "
        />

    
          <button className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-700 focus:outline-none" onClick={handleSearch}>Search</button>
     
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 w-[50%] ">
        {gifs.map((gifs) => (
          <div key={gifs.id} className="relative">
            <img
              src={gifs.images.fixed_height.url}
              alt="GIF"
              className="w-full rounded-md h-[25vh]"
            />
           
            <button
              className="absolute tracking-wider p-4 text-white bg-purple-700 rounded-full top-2 right-2 hover:shadow-[0_0_40px_theme('colors.white')] focus:outline-none"
              onClick={() => addToFavorites(gifs)} 
              
            >
              Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiphyPage;


