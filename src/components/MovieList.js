import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    console.log("Movies data:", movies); // Debugging

    if (!movies || movies.length === 0) {
        return <div>Loading...</div>; // Show a fallback UI instead of crashing
    }

    return (
        <div className="px-6">
        <h1 className="text-lg md:text-3xl py-6 text-white">{title}</h1>
        <div className="flex overflow-x-scroll py-4">

            <div className="flex"> 
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default MovieList;
