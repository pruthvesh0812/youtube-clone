import React from 'react'
import SearchBar from './SearchBar'
import { useSetRecoilState } from 'recoil'
import { ShowSideBar } from '@/atoms/ShowSideBar'

export default function AppBar() {
  const setShow = useSetRecoilState(ShowSideBar);
  return (
    <div className='flex justify-between py-2 px-3'>
      <div className='flex '>
        <img src="/menu.png" alt="menu icon"  onClick={()=>{setShow((prev)=>{return !prev})}}/>
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
