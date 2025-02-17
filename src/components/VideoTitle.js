import React from 'react';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[16%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-12 text-lg  rounded-lg hover:bg-opacity-80'> <PlayArrowRoundedIcon/>Play</button>
            <button className=' mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-90'><InfoOutlinedIcon sx={{height:"20px"}}/>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle