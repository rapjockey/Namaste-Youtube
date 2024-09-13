import React, { useState } from 'react'

import {findNthPrime} from "../utils/helper"
import Demo2 from './Demo2';

const Demo = () => {

    const [text,setText] = useState(0);
 
    const [darkTheme, setDarkTheme] = useState(true);

    console.log(text)

    const prime = findNthPrime(text)

  return (
   <div className='flex'>
     <div className={'m-10 border border-black p-4 h-72 w-72' +  (darkTheme &&  'bg-gray-900') }>
        <div >
            <input className='px-2 border border-black' 
            type='number' value={text} onChange={(e) => setText(e.target.value)}/>
            <h1>username {prime}</h1>
        </div>
        
      </div>
      <Demo2/>
   </div>
  )
}

export default Demo