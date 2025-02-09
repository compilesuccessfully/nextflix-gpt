import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
         <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"></img>
         </div>
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch
