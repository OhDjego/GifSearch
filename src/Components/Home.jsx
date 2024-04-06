import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-16 bg-black">
      <div className="flex items-center justify-center">
        <p className="text-3xl text-white">Are you looking for a GIF ? </p>
      </div>
        <Link to="/giphy">
        <button className="text-white mt-8 w-[30vh] flex hover:cursor-pointer justify-center  p-8 text-2xl  rounded-lg hover:shadow-[0_0_50px_theme('colors.purple.700')] shadow-[0_0_10px_theme('colors.purple.700')]">Find a Gif</button>
        </Link>
      
        <Link to="/favorites">
        <button className="text-white w-[30vh] mt-8 flex hover:cursor-pointer justify-center  p-8 text-2xl  rounded-lg hover:shadow-[0_0_50px_theme('colors.purple.700')] shadow-[0_0_10px_theme('colors.purple.700')]"> Your Favorite Gifs</button>
        </Link>
     
    </div>
  );
};

export default HomePage;
