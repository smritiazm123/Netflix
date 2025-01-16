import { createSlice } from "@reduxjs/toolkit";

const moviewSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>
        {
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>
        {
            state.trailerVideo=action.payload
        }
    }
});


export const {addNowPlayingMovies,addTrailerVideo}=moviewSlice.actions
export default moviewSlice.reducer;