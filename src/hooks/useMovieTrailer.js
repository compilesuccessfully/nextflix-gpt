
import { API_OPTIONS } from '../utilities/constant';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utilities/movieSlice';

const useMovieTrailer = (movieId)=> {
    const dispatch = useDispatch()
    const getMovieVideos = async ()=>{
     const data =  await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US' , API_OPTIONS);
     const json = await data.json();
     console.log(json , "json");
     const filterData = json.results.filter((video)=> video.type === "Trailer" )
     const trailer = filterData.length ? filterData[0] : json.results[0];
     dispatch(addTrailerVideo(trailer))
     console.log(trailer , "k");
    }
  
  
    useEffect(()=>{
      getMovieVideos();
    },[])
   
}

export default useMovieTrailer;