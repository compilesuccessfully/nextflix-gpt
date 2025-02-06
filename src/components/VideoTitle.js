import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="my-4   flex gap-2 ">
        <button className="bg-white text-black p-4 px-12 text-xl flex gap-2  rounded-lg hover:bg-opacity-80"> 
        <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
        Play</button>
        <button className= " mx-2 bg-white text-black p-4 px-12 text-xl flex gap-2 bg-opacity-50 rounded-lg">
        <svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
          More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
