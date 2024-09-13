import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggelMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEO_API } from '../utils/constants';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Head = ({info}) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState([]);
  const [searchQuery , setSearchQuery ] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  useEffect( () => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      }
      else{
        searchApiSuggestions();
      }
    }, 200); 

   return () =>  {
    clearTimeout(timer);
  }
  },[searchQuery])

  const searchApiSuggestions = async () => {
    //console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1])
    setSuggestion(json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  }
 
  const toggleMenuHandler = () => {
    dispatch(toggelMenu());
  }

  return (
    <div className='sticky top-0 bg-white shadow-lg flex justify-between items-center '>
        <div className='flex items-center mx-2'>
            <img onClick={() => toggleMenuHandler()}  className='h-6 mx-2 cursor-pointer' alt='Hamberger-Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'/>
            <img className='h-16' alt='YouTube-Logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqpDAlNBhTKmnIcY99fIUZTBjybFasao-8Q&s"/>
        </div>
        <div className='mr-14' >
          <div>
            <input className='border border-gray-400 w-96 h-8 p-4 p-y-2  rounded-l-full' 
            placeholder='Search' type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            />
            <button className='bg-gray-400 h-9 px-2 rounded-r-full' onClick={() => {
              const FilterSearch = searchText.filter((text) => text?.info?.snippet?.toLowerCase().includes(searchQuery.toLowerCase()));
              console.log(FilterSearch)
              setSearchText(FilterSearch);
              
            }}
            >
              🔍</button>
            </div>
           <div className=' absolute '>
           { showSuggestions && 
             <div className=' bg-white h-auto cursor-default w-[26rem]  py-4 my-2 mx-1 shadow-lg rounded-lg border border-gray-300'>
              <ul>
              {suggestion.map ( (s) =>
               <li key={s} className='px-2'> 🔍 {s}</li> 
              )}
               </ul>
            </div>}
           </div>
        </div>
        <div>
            <img className='h-8 pr-4' alt='User-Logo' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
        </div>
    </div>
  )
}

export default Head