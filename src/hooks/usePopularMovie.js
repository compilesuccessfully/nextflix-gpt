
import { API_OPTIONS } from '../utilities/constant';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMoviews, addPopularVideo } from '../utilities/movieSlice';


const usePopularMovie = ()=>{
    const dispatch = useDispatch()
    const popularVideo = useSelector(store => store.movies.popularVideo)
  const getPopularMovies=  async() =>{
   const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' , API_OPTIONS);
   const json = await data.json();
   console.log(json.results);
   dispatch(addPopularVideo(json.results))
  };
  useEffect(()=>{
    if(!popularVideo) getPopularMovies()
  }, []);

}
export default usePopularMovie;