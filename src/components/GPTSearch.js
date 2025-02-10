import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
         <img className="h-screen object-cover"  src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"/>
         </div>

    <div className="">
        
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
    </>
  )
}

export default GPTSearch
