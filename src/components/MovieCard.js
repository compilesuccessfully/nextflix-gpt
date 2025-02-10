import React from 'react'
import { IMAGE_CDN } from '../utilities/constant'

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
  return (
    
    <div className="w-48 pr-4">
      < img alt="movie card" src={IMAGE_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard
