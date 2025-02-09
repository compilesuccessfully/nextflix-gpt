import React from 'react'
import Header  from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovie from '../hooks/usePopularMovie'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
  const showgptsearch = useSelector(store => store.gpt.showGptSearch)
  // const dispatch = useDispatch()
  // const nowPlayingMovies=  async() =>{
  //  const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1' , API_OPTIONS);
  //  const json = await data.json();
  //  console.log(json.results);
  //  dispatch(addNowPlayingMoviews(json.results))
  // };
  // useEffect(()=>{
  //   nowPlayingMovies()
  // }, []);
  useNowPlayingMovies();
  usePopularMovie();
  return (
    <div>
    
      <Header/>
      {
        showgptsearch ? <GPTSearch/> :      (
          <>
        <MainContainer/>
        <SecondaryContainer/>
        </>)
      }
      
 
    </div>
  )
}

export default Browse
