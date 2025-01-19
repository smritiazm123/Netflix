import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './secondaryContainer';
import usePopularMovies from '../hooks/usePopularmovies';

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
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