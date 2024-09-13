import React from 'react'

const VideoCart = ({ info }) => {
  //console.log(info);
  const thumbnail = info?.snippet?.thumbnails?.medium?.url ;
  const title = info?.snippet?.title ;
  const channelTitle = info?.snippet?.channelTitle;
  const viewcount = info?.statistics?.viewCount;
  //console.log(title);
  return (
    <div className='p-2 ml-4 mt-2 w-72 h-72 shadow-lg'>
        <img className='rounded-lg ' alt='thumbnail' src={thumbnail}/>
        <h1 className='	text-overflow: ellipsis  font-bold'>{title}</h1>
        <h3 className='text-x'>{channelTitle}</h3>
        <p>{viewcount} views</p>
    </div>
  )
}

export const AdVideoCart = ({info}) => {
  return (
    <div className='p-1 m-1 border border-red-600'>
      <VideoCart info = {info}/>
    </div>
  )
}

export default VideoCart