import React, { useState } from 'react'

function ReplyBox() {
    const [reply, setReply] = useState<string>('')
    return (
        <div className=' left-8 bottom-3 mb-2 h-fit bg-[#ebeef5] p-1.5 pr-3 rounded-lg flex sm:flex-col     '>
            <div className='w-full sm:flex'>
            <div className='flex w-full'>
                <img className='w-12 h-12 mx-3 rounded-full   ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU' alt='userpic'></img>
                <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm border border-indigo-900  focus:border -indigo-900 rounded-lg      "
                    placeholder="Write your thoughts here..."
                    value={reply}
                    onChange={(e)=>(setReply(e.target.value))}
                />

            </div>
            <div className='flex justify-end'>
            <button className='text-white mt-2  justify-end h-fit px-4 py-2  rounded-lg bg-[#6262a1] sm:mt-0 sm:mx-2'>
                REPLY
            </button>
            </div>
            </div>
        </div>
    )
}

export default ReplyBox