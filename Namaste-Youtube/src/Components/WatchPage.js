import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentList from './CommentList';
import LiveChat from './LiveChat';
import MoreVideos from './MoreVideos';
import {YOUTUBE_VIDEO_API }from "../utils/constants"



const WatchPage = () => {

  const [videos, setVideos] = useState([]);

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"))
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(closeMenu());
        getVideos();
    },[])

    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
     
      console.log(json);
      setVideos(json.items);
    }

  return (
    <div>
      <div className=' p-2 '>
         <div className='flex '>
           <div >
           <iframe width="1000" height="500" 
            src={"https://www.youtube.com/embed/" +  searchParams.get("v")}
            title="YouTube video player" frameborder="0" 
            AutoPlay
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
            </iframe>
           </div>
          <div className='w-full'>
            <LiveChat/>
          </div>
         </div>
      </div>
      <div className='flex '>
      <CommentList/>
      <div className=''>
       {videos.map( video => <MoreVideos info= {video}/> )} 
    </div>
      </div>
    </div>
  )
};

export default WatchPage