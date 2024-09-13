import React, { useRef, useState } from 'react'

const Demo2 = () => {
const[y , setY] = useState(0);
let x = 0;
 const ref = useRef(0);

console.log("Rendring....")
  return (
    <div className='m-10 border border-black p-4 h-72 w-72'>
        <div>
            <button className='px-4 py-2 m-2 bg-gray-300' onClick={() => {
                x = x + 1;
                console.log("Let = " + x)
            }} >Let</button>
            <span>{x}</span>
        </div>
        <div>
            <button className='px-4 py-2 m-2 bg-gray-300' value={y} onClick={() => {
                setY(y + 1);
                console.log(y)
            }} >State</button>
            <span>{y}</span>
        </div>
        <div>
            <button className='px-4 py-2 m-2 bg-gray-300' onClick={() => {
                ref.current = ref.current + 1;
                console.log(ref.current)
            }} >ref</button>
            <span>{ref.current}</span>
        </div>
    </div>
  )
}

export default Demo2