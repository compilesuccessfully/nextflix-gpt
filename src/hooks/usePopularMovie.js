
import { API_OPTIONS } from '../utilities/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMoviews, addPopularVideo } from '../utilities/movieSlice';


const usePopularMovie = ()=>{
    const dispatch = useDispatch()
  const getPopularMovies=  async() =>{
   const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' , API_OPTIONS);
   const json = await data.json();
   console.log(json.results);
   dispatch(addPopularVideo(json.results))
  };
  useEffect(()=>{
    getPopularMovies()
  }, []);

}
export default usePopularMovie;