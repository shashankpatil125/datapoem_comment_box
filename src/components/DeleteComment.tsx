import React from 'react'


type Props = {
    on_delete: ()=>void
}
function DeleteComment(p:Props) {
    return (
        <div className=' left-8 bottom-3 mb-2 h-fit bg-[#ebeef5] p-1.5 pr-3 rounded-lg flex sm:flex-col     '>
            <div className='w-8/12 mx-auto px-auto'>
                <p className='text-xl font-bold'>Delete Comment</p>
                <p>Do you want to delete this comment? This will remove the comment and can't undone</p>
                
                    <button className='bg-[#67717d] text-white w-28 py-2 rounded-lg mx-1 md:mr-2 mt-2 text-center'>NO, CANCEL</button>
                    <button onClick={p.on_delete} className='bg-[#ea6368] text-white w-28 py-2 rounded-lg mx-1 md:ml-2 mt-2 text-center' >YES, DELETE</button>
            </div>
        </div>
    )
}

export default DeleteComment