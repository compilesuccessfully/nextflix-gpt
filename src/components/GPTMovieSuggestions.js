import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {

    const gpt = useSelector(store => store.gpt);
    const { movieNames ,movieResult} = gpt;
    if(!movieNames) return null;

  return (
    <div className = "p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {/* <h1>{movieNames[0]}</h1> */}
        {
      movieNames.map((movie , index)=>{
               return <MovieList key = {movie}  title = {movie} movies = {movieResult[index]}/>
            })
        }
    
      </div>
    </div>
  )
}

export default GPTMovieSuggestions
