import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './secondaryContainer';

const Browse = () => {
 useNowPlayingMovies();
  return (
    <>
    <Header/>
    {/* 
        MainContainer
          - VideoBackground
          - VideoTitle
        SecendoryContainer
         -MovieList*n
            - card*n
    */}
    <MainContainer/>
    <SecondaryContainer/>
    </>
  )
}

export default Browse