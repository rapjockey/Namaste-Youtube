import React, { useEffect, useState } from 'react'
import VideoCart, {AdVideoCart} from './VideoCart'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
 const [videos, setVideos] = useState([]);
  useEffect( () => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
   
    console.log(json);
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap'>
      <AdVideoCart info={videos[3]}/>
       {videos.map( video => <Link  key={video.id} to={"/watch?v=" +video.id}><VideoCart info= {video}/> </Link>)} 
    </div>
  )
}

export default VideoContainer