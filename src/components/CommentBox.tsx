import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import UserCanDo from './UserCanDo';
import DeleteComment from './DeleteComment';
import NestedReply from './NestedReply';
import SendMsg from './SendMsg';

export interface Comment {
    profilePic:  string;
    username:    string;
    votes:       number;
    message:     string;
    createdAt:   string;
    submessage?: Comment[];
}
type Props = {
    comment:Comment,
    onDelete:()=>void
}

function CommentBox({comment:{votes,createdAt,message,profilePic,username,submessage},...p}:Props ) {
    const [vote, setvotes] = useState<number>(votes);
    const [voted, setvoted] = useState<number>(0);
    const [replyVisibility, setReplyVisibility] = useState<boolean>(false)
    const [deletePrompt, setdeletePrompt] = useState<boolean>(false)
    const [replies,setReplies] =  useState<Comment[]>(submessage??[])
    const doReply:()=>void=()=>(setReplyVisibility(true))
    const doDel:()=>void=()=>(setdeletePrompt(true))


    return (
        <div>
            <div className='bg-[#fffefe] p-4 rounded-xl sm:flex relative mb-2' >
                <div className='absolute left-8 bottom-3 w-fit h-fit bg-[#ebeef5] p-1.5 rounded-lg flex sm:flex-col sm:absolute sm:left-3 sm:top-3 '>
                    <button onClick={() => (voted !== 1 ? (setvotes(vote + 1), setvoted(voted + 1)) : console.log("max"))}>
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
                        <img className='w-12 mx-3  rounded-full ' src={profilePic} alt='userpic'></img>
                        <p className='ml-1 h-full my-2 text-xl '>{username}</p>
                        <p className='ml-4 h-full my-2.5 text-gray-400'>{createdAt}</p>
                    </div>
                    <div className='mb-10 text-left mx-3 mt-3 sm:mb-0'>
                        {message}
                    </div>
                    <UserCanDo doReply={doReply} doDel={doDel} username={username}/>
                </div>
            </div>
            {replies?.length!==0 ? replies?.map((r)=><NestedReply 
                profilePic={r.profilePic}
                username={r.username}
                message={r.message}
                createdAt={r.createdAt}
                votes={r.votes}
            />):null}
            {deletePrompt?<DeleteComment on_delete={p.onDelete} />:null}
            {replyVisibility ? 
        <SendMsg onNewComment={e=>{
          const _comments = replies.slice()
          _comments.push(e)
          setReplies(_comments)
        }}/> : null}
        </div>
    )
}

export default CommentBox