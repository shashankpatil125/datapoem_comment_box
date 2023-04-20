import { Icon } from '@iconify/react'
type Props = {
    doReply: () => void;
    doDel: () => void;
    username: String
};

function UserCanDo({ doReply, doDel, username }: Props) {
    const myname = localStorage.getItem('myname')
    

    return (
        <div>
            {username === myname ? <div className='text-[#6262a1] absolute right-12 bottom-6  sm:flex-col sm:absolute sm:right-10 sm:top-6 '>
                <div className='flex'>
                    <button className='flex' onClick={doDel}>
                        <Icon className='text-[#fd0000] text-2xl' icon="material-symbols:delete-rounded" />
                        <p className='text-[#fd0000] '>Delete</p>
                    </button>
                    <button className='flex ml-3' >
                        <Icon className='text-[#6262a1] text-2xl' icon="material-symbols:edit-outline-rounded" />
                        <p className='text-[#6262a1] '>Edit</p>
                    </button>
                </div>
            </div> :
                <div className='text-[#6262a1] absolute right-12 bottom-6  sm:flex-col sm:absolute sm:right-10 sm:top-6 '>
                    <button className='flex' onClick={doReply}>
                        <Icon className='text-[#6262a1] text-2xl' icon="ic:round-reply" />
                        <p className='text-[#6262a1] '>Reply</p>

                    </button>
                </div>
            }
        </div>
    )
}

export default UserCanDo