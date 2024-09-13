import React from 'react'
import { BiSolidVideo, BiSolidVideos } from 'react-icons/bi';
import { CgPlayList, CgProfile } from 'react-icons/cg';
import { MdHomeFilled, MdSubscriptions, MdWatchLater } from 'react-icons/md';
import { RiHistoryFill, RiScissors2Line } from 'react-icons/ri';
import { SiYoutubeshorts } from 'react-icons/si';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
  <div className=' sticky top-20 h-[100vh] pr-4 m-2 w-48 shadow-lg leading-6'>
         <div className='pl-6  flex items-center border-b border-gray-300'>
           <div className='mr-6'>
            <MdHomeFilled className='w-5 my-6  h-5'/>
            <SiYoutubeshorts className='w-5 my-6  h-5'/>
            <MdSubscriptions className='w-5 my-6  h-5'/>
           </div>
            <div className='flex flex-col leading-8'>
            <Link className='py-2' to={"/"}>Home</Link>
            <Link className='py-2' to={"/"}>Shorts</Link>
            <Link className='py-2' to={"/"}>Subscription</Link>
            </div>
         </div>
         <div className='pl-6 flex items-center border-b border-gray-300'>
           <div className='mr-6'>
            <CgProfile className='w-5 my-6  h-5'/>
            <RiHistoryFill className='w-5 my-6  h-5'/>
            <CgPlayList className='w-5 my-6  h-5'/>
           </div>
            <div className='flex flex-col leading-8'>
            <Link className='py-1' to={"/"}>Yourchannel</Link>
            <Link className='py-2' to={"/"}>History</Link>
            <Link className='py-2' to={"/"}>PlayList</Link>
            </div>
         </div>
         <div className='pl-6 flex items-center border-b border-gray-300'>
           <div className='mr-6'>
            <BiSolidVideos className='w-5 my-6  h-5'/>
            <MdWatchLater className='w-5 my-6  h-5'/>
            <RiScissors2Line className='w-5 my-6  h-5'/>
           </div>
            <div className='flex flex-col leading-8'>
            <Link className='py-2' to={"/"}>Your Videos</Link>
            <Link className='py-2' to={"/"}>Watch Later</Link>
            <Link className='py-2' to={"/"}>Your clips</Link>
            </div>
         </div>
         <div className='pl-6 flex items-center border-b border-gray-300'>
           <div className='mr-6'>
            <BiSolidVideos className='w-5 my-6  h-5'/>
            <MdWatchLater className='w-5 my-6  h-5'/>
            <RiScissors2Line className='w-5 my-6  h-5'/>
           </div>
            <div className='flex flex-col leading-8'>
            <Link className='py-2' to={"/"}>Your Videos</Link>
            <Link className='py-2' to={"/"}>Watch Later</Link>
            <Link className='py-2' to={"/"}>Your clips</Link>
            </div>
         </div>
  </div>
    
  )
}

export default SideBar