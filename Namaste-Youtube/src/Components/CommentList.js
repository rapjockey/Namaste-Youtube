import React from 'react'


const commentData = [
    {
        name : 'Rahul',
        tital : 'Hello This Namaste recat course is Amazing',
        repies : [],
    },
    {
        name : 'Rahul',
        tital : 'Hello This Namaste recat course is Amazing',
        repies : [{
            name : 'Rahul',
            tital : 'Hello This Namaste recat course is Amazing',
            repies : [],
        },{
            name : 'Rahul',
            tital : 'Hello This Namaste recat course is Amazing',
            repies : [],
        },{
            name : 'Rahul',
            tital : 'Hello This Namaste recat course is Amazing',
            repies : [{
                name : 'Rahul',
                tital : 'Hello This Namaste recat course is Amazing',
                repies : [],
            },{
                name : 'Rahul',
                tital : 'Hello This Namaste recat course is Amazing',
                repies : [{
                    name : 'Rahul',
                    tital : 'Hello This Namaste recat course is Amazing',
                    repies : [],
                },{
                    name : 'Rahul',
                    tital : 'Hello This Namaste recat course is Amazing',
                    repies : [],
                },],
            },],
        },],
    },{
        name : 'Rahul',
        tital : 'Hello This Namaste recat course is Amazing',
        repies : [],
    },{
        name : 'Rahul',
        tital : 'Hello This Namaste recat course is Amazing',
        repies : [],
    },{
        name : 'Rahul',
        tital : 'Hello This Namaste recat course is Amazing',
        repies : [{
            name : 'Rahul',
            tital : 'Hello This Namaste recat course is Amazing',
            repies : [{
                name : 'Rahul',
                tital : 'Hello This Namaste recat course is Amazing',
                repies : [],
            },],
        },],
    },{
        name : 'Rahul',
        tital : 'Hello This Namaste recat course is Amazing',
        repies : [],
    },{
        name : 'Rahul',
        tital : 'Hello This Namaste recat course is Amazing',
        repies : [{
            name : 'Rahul',
            tital : 'Hello This Namaste recat course is Amazing',
            repies : [{
                name : 'Rahul',
                tital : 'Hello This Namaste recat course is Amazing',
                repies : [],
            },],
        },],
    },
]

const Comment = ({data}) => {
    const {name, tital, repies} = data;
    return (
        <div className='flex gap-2 my-4 mx-6 rounded-md w-[500px]  bg-gray-100'>
            <img className='w-10 h-10 m-2' alt='userlogo' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
            <div>
            <h1 className='font-bold text-x'>{name}</h1>
            <p className='text-xs'>{tital}</p>
            </div>
        </div>
    )
}

const CommetsList = ({comments}) => {
        return comments.map((comment) => ( 
        <div className='w-[600px]'>
                <Comment data = {comment}/> 
                <div className='ml-8 border border-l-black'>
                    <CommetsList comments = {comment.repies} />
                </div>
             </div>
));}

const CommentList = () => {
  return (
    <div>
        <h1 className=' my-4 mx-2 text-2xl font-bold'>Comments :</h1>
       < CommetsList comments={commentData}/>
    </div>
  )
}

export default CommentList