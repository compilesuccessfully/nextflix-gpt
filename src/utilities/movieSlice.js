import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
name:"movies",
initialState: {
    nowPlayingMovies: null,
    trailerVideo : null,
    popularVideo : null
},
reducers: {
    addNowPlayingMoviews: (state , action)=>{
       state.nowPlayingMovies = action.payload
    },
    addTrailerVideo: (state , action)=>{
      state.trailerVideo = action.payload
    },
    addPopularVideo: (state , action)=>{
        state.popularVideo = action.payload
      }
}
})
export const { addNowPlayingMoviews , addTrailerVideo , addPopularVideo } = movieSlice.actions;
export default movieSlice.reducer;