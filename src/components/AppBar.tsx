import React from 'react'
import SearchBar from './SearchBar'

export default function AppBar() {
  return (
    <div className='flex justify-between py-2 px-3'>
      <div className='flex '>
        <img src="/menu.png" alt="menu icon"  />
        <div className='inline-flex items-center px-1'> 
            YOUTUBE
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <button className='bg-red-700 px-2 py-1 font-medium text-slate-200  rounded-[3px]'>
            Sign in
        </button>
      </div>
    </div>
  )
}
