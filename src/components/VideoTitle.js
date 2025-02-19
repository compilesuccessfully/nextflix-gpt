import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="my-4 flex gap-2">
        <button className="bg-white text-black py-2 md:py-3 px-4 md:px-8 text-sm md:text-lg flex items-center rounded hover:bg-opacity-80">
          <svg
            className="h-6 w-6 text-black mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 2v20l17-10L4 2z" />
          </svg>
          Play
        </button>
        <button className=" hidden md:flex bg-gray-700 bg-opacity-70 text-white py-2 md:py-3 px-4 md:px-8 text-sm md:text-lg flex items-center rounded hover:bg-opacity-50">
          <svg
            className="h-6 w-6 text-white mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};


export default VideoTitle

