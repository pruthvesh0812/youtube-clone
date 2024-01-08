import React from 'react'

export default function SearchBar() {


  return (
    <form>
        {/* <div className='flex justify-between border border-r-8 border-slate-300'> */}
            <div className='relative '>
                {/* <label className='absolute left-3 text-slate-300 font-sans font-normal'>Search</label> */}
                <input value="Search" 
                       placeholder='Search videos here' 
                       required
                       className='rounded-full bg-transparent border border-stone-600 pl-3 py-1.5 lg:w-[500px]'

                       />
                <button className='rounded-r-full border-l-[0.5px] border-stone-600 bg-stone-800/70 absolute right-[0.4px] top-[0.5px] px-4 h-[95%]'>
                    <img src="/search.png" alt="search icon" />
                    <div>
                      <img src="/search" alt="" />
                    </div>
                </button>
            </div>
        {/* </div> */}
    </form>
  )
}
