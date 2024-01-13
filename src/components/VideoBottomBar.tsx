

export default function VideoBottomBar() {
  return (
    <div>
        <label className='my-5 text-slate-100 font-bold text-xl'>Title</label>
        <div className="flex justify-between mt-2">
            <div className="flex items-center">
                <img src="/profile photo.jpg" alt="profile_photo" className="rounded-full w-10 h-10"/>
                <div className="ml-3">
                    <div className=" gap-2 inline-flex items-center">
                        <div className="text-slate-100 font-medium text-lg">ProfileName</div>
                        <img src="/tick.png" alt="tick_mark" className="w-4 h-4 "/>
                    </div>
                    <div className="text-sm text-slate-400 -mt-1">subs</div>
                </div>
                <button className="rounded-full w-full py-2 px-3 font-medium text-slate-800 bg-slate-100 ml-8">
                    Subscribe
                </button>
                
            </div>

            <div className="flex justify-evenly gap-2 items-center">
                <div className="rounded-l-full flex bg-stone-800/70 py-2  w-18 justify-around px-2 border-r border-slate-400 hover:bg-stone-600/70"> 
                        <button className="flex gap-2 "><img src="/like.png" alt="like" />1.4k</button>  
                </div>
                <div className="rounded-r-full -ml-2 flex bg-stone-800/70 py-2 w-18 justify-around px-2 hover:bg-stone-600/70"> 
                        <button><img src="/dislike.png" alt="dislike" /></button>                 
                </div>
                <button className="flex gap-0 bg-stone-800/70 py-2 rounded-full px-3 hover:bg-stone-600/70"><img src="/share.png" alt="share" className="mr-2 " /> Share </button>
                <button className="rounded-full w-10 h-10 bg-stone-800/70  flex-col items-center pt-0 justify-center text-xl hover:bg-stone-600/70">...</button>
            </div>
        </div>      
    </div>
  )
}
