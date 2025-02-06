
import { API_OPTIONS } from '../utilities/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMoviews } from '../utilities/movieSlice';


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
  const nowPlayingMovies=  async() =>{
   const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1' , API_OPTIONS);
   const json = await data.json();
   console.log(json.results);
   dispatch(addNowPlayingMoviews(json.results))
  };
  useEffect(()=>{
    nowPlayingMovies()
  }, []);

}
export default useNowPlayingMovies;