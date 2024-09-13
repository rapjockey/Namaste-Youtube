import React from 'react'

const ChatMassege = ({name, massege}) => {
  return (
    <div className='flex items-center px-1 shadow-sm'>
         <img className='w-6 h-6 m-2' alt='userlogo' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
         <div className='flex'>
            <p className='text-gray-600 text-sm mr-2'>{name}</p>
            <p className='text-sm'>{massege}</p>
         </div>
    </div>
  )
}

export default ChatMassege