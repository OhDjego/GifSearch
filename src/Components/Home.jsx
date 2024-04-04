import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-16 bg-black">
      <div className="flex items-center justify-center">
        <p className="text-xl text-white">Find your favorite GIF</p>
      </div>
      <div className="text-white flex hover:cursor-pointer justify-center items-center p-8 text-2xl w-[20%] h-[10%] rounded-lg hover:shadow-[0_0_50px_theme('colors.purple.700')] shadow-[0_0_10px_theme('colors.purple.700')]">
        <Link to="/giphy">
        <button>Click Me!</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
