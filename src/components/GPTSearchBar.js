import React from 'react'
import lang from '../utilities/languageconstant'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import client from '../utilities/openapi'
import { API_OPTIONS } from '../utilities/constant'
import { addGptMovieResult } from '../utilities/gptSlice'

const GPTSearchBar = () => {
    const langKey = useSelector( store => store.config.lang)
    const  searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMBD  = async (movie) =>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json =  await data.json();
        return json.results
    }

    const handleGPTSearchClick = async ()=>{
          //console.log(searchText.current.value , "k")
          const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query" + searchText.current.value + ".only give me names of 5 movies , comma separated like the example result given ahead.Example Result:Gadar , Sholae , Don ,Gol Mal , Koi Mil geya";
     const gptResults =    await client.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-4o-mini',
          });
          if(!gptResults.choices){
             return "error"
          }
          console.log(gptResults.choices?.[0]?.message?.content);
          const gptMovies =  gptResults.choices?.[0]?.message?.content?.split(",");
          const promiseArray =  gptMovies.map((movie) => searchMovieTMBD(movie));
          const tmbdResults  =  await Promise.all(promiseArray)
        ;
        console.log(tmbdResults)
        dispatch(addGptMovieResult({ movieNames: gptMovies , movieResult : tmbdResults}))

    }
  return (
    <div className="pt-[35%] md:pt-[20%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
