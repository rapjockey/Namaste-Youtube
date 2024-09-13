import React, { useEffect, useState } from 'react'
import ChatMassege from './ChatMassege'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomMessage, RamdomNameGenerate } from '../utils/helper';

const LiveChat = () => {
 
    const dispatch = useDispatch(); 

    const[LiveChat, SetLiveChat] = useState();
    
    const chatMessage = useSelector((store) => store.chat.message)

    useEffect(() => {
        const i = setInterval(() => {
           // console.log("Api Polling");
            
            dispatch(addMessage({
                name : RamdomNameGenerate(),
                message : generateRandomMessage(20)
            }));

        },1000);

        return () => clearInterval(i);
    },[])

  return (
    <div>
        <div className='mx-4 w-[460px] border border-black h-[500px] rounded-md overflow-x-scroll flex flex-col-reverse'>
       {chatMessage.map((c, i)  =>   (
        <ChatMassege key={i} name={c.name} massege={c.message}/>
        )
         )}
    </div>
    <form className=' mx-4 my rounded-md  w-[460px] border border-black'
        onSubmit={(e) => {
            e.preventDefault();
            console.log("Submit",LiveChat)

            dispatch(addMessage({
                name : "Rahul Jadhav",
                message : LiveChat
            }))
            SetLiveChat("")
           }}
    >
        <input className=' rounded-lg w-72 mx-8 my-2 px-2  border border-black' 
        type='text'
        placeholder='Chat..'
        value={LiveChat} onChange={(e) => SetLiveChat ( e.target.value)} />
        <button className='bg-gray-400 px-2 rounded-md'>Send</button>
    </form>
    </div>
  )
}

export default LiveChat