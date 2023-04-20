import React, { useState } from 'react'
import { Icon } from '@iconify/react';


export interface replys {
    profilePic:  string;
    username:    string;
    votes:       number;
    message:     string;
    createdAt:   string;
}
function NestedReply({username,profilePic,votes,message,createdAt}:replys) {
    const [vote, setvotes] = useState<number>(2);
    const [voted, setvoted] = useState<number>(0);

  return (
    <div className='flex'>
        <div className='w-20 md:60 sm:w-40'>
            <div className='w-1/2 border-r-2 border-gray-300 h-full'></div>
            <div></div>
        </div>
        <div className='bg-[#fffefe] w-full p-4 rounded-xl sm:flex relative mb-2 ' >
            <div className='absolute left-8 bottom-3 w-fit h-fit bg-[#ebeef5] p-1.5 rounded-lg flex sm:flex-col sm:absolute sm:left-3 sm:top-3 '>
                <button onClick={() => (voted !== 1 ? (setvotes(vote + 1), setvoted(voted+1)) : console.log("max"))}>
                    <Icon className='m-1 font-bold text-[#6262a1] h-full my-auto'
                        icon="material-symbols:add" />
                </button>
                <p className='text-[#6262a1] m-1 items-center'>{vote}</p>
                <button
                    onClick={() => (voted !== -1 ? (setvotes(vote - 1), setvoted(voted - 1)) : null)}>
                    <Icon className='text-[#6262a1] m-1 items-center h-full my-auto'
                        icon="ic:baseline-minus" />
                </button>
            </div>
            <div className='ml-0 p-2 pt-0 sm:ml-7' >
                <div className='flex h-12 '>
                    {/* // eslint-disable-next-line jsx-a11y/alt-text */}
                    <img className='w-12 mx-3  rounded-full' src={profilePic} alt='userpic'></img>
                    <p className='ml-1 h-full my-2 text-xl '>{username}</p>
                    <p className='ml-4 h-full my-2.5 text-gray-400'>now </p>
                </div>
                <div className='mb-10 text-left mx-3 mt-3 sm:mb-0'>
                    {message}               
                </div>
                <div className='text-[#6262a1] absolute right-12 bottom-6  sm:flex-col sm:absolute sm:right-10 sm:top-6 '>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NestedReply