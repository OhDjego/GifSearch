import React, { useState } from "react";
import { useGiphySearch } from "../hooks/useGiphySearch";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const GiphyPage = () => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const { searchGifs } = useGiphySearch();

  const handleSearch = async () => {
    const foundGifs = await searchGifs(query);
    setGifs(foundGifs);
  };

  const addToFavorites = (gif) => {
    const yourFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem("favorites", JSON.stringify([...yourFavorites, gif]));
  };

  return (
    <div className="flex flex-col items-center mt-20 ">
      <div className="flex bg-purple rounded-lg shadow-[0_0_40px_theme('colors.pink.500')] item-center w-[90%] sm:w-[50%] flex-col gap-8 justify-center items-center p-8 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find your Gif"
          className="p-4 rounded-md w-[40vh] sm:w-[30vh] text-md md:text-xl"
        />

        <button
          className="button hover:shadow-[0_0_50px_theme('colors.pink.500')]"
          onClick={handleSearch}
        >
          Search
        </button>
        <Link to="/favorites">
          <button className="button hover:shadow-[0_0_50px_theme('colors.pink.500')] ">
            Your Favorites
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-[70%] sm:w-[50%]">
        {gifs.map((gifs) => (
          <div key={gifs.id} className="relative">
            <LazyLoadImage
              src={gifs.images.fixed_height.url}
              alt="GIF"
              className="w-full rounded-md h-[25vh]"
            />

            <button
              className="absolute tracking-wide p-2 text-sm text-black bg-white rounded-full top-2 right-2 hover:shadow-[0_0_40px_theme('colors.white')] focus:outline-none"
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
