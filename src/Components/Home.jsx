import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-16 bg-black bg-">
      <div className="flex items-center justify-center">
        <h1>Are you looking for a GIF ? </h1>
      </div>
      <Link to="/giphy">
        <button className="text-white mt-8 w-[30vh] flex hover:cursor-pointer justify-center  p-8 text-2xl  rounded-lg hover:shadow-[0_0_60px_theme('colors.pink.500')] shadow-[0_0_30px_theme('colors.pink.500')]">
          Find your Gif
        </button>
      </Link>

      <Link to="/favorites">
        <button className="text-white w-[30vh] mt-8 flex hover:cursor-pointer justify-center  p-8 text-2xl  rounded-lg hover:shadow-[0_0_50px_theme('colors.teal.300')] shadow-[0_0_10px_theme('colors.teal.300')]">
          {" "}
          Your Favorite Gifs
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
