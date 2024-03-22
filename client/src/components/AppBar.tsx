import React from 'react'
import SearchBar from './SearchBar'
import { useSetRecoilState } from 'recoil'
import { ShowSideBar } from '@/store/atom/ShowSideBar'
import { useRouter } from 'next/router'
import axios from 'axios'
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useEffect } from 'react'
import { request } from 'http'
import { NextResponse } from 'next/server'

// doesnt work, gives cannot getStaticProps() as error.. because there is not local storage on server side, becasue everything get rendered first on server side
// const checkUserSignedIn = async () => {
//   console.log(localStorage.getItem("token"))
//   setCookie('userTokenCookie', localStorage.getItem("token"))
//   const res = await axios.get("http://localhost:3000/api/ifLoggedIn")
//   console.log(res, "res")
// }

type authenticateType = {
  isAuthenticated: boolean
}

export default function AppBar({ isAuthenticated }: authenticateType) {
  const setShow = useSetRecoilState(ShowSideBar);
  const router = useRouter()

  return (
    <div className='flex justify-between py-2 px-3'>
      <div className='flex '>
        <img src="/menu.png" alt="menu icon" onClick={() => { setShow((prev) => { return !prev }) }} />
        <div className='inline-flex items-center px-1'>
          YOUTUBE
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        {
          (isAuthenticated) && (
            <button className='bg-red-700 px-2 py-1 font-medium text-slate-200  rounded-[3px]'
              onClick={async () => {

                // will not work because cookies set with httpOnly cannot be deleted by client side, but only by server side
                // setCookie( 'userTokenCookie', null, {
                //   expires: new Date(0),
                //   path: '/', // Match the path used when setting the cookie
                //   httpOnly: true, // Match the HttpOnly attribute used when setting the cookie
                // });
                const res = await axios.get("http://localhost:3000/api/logout")
                console.log(res, "logging out")
                // router.push("/Signupin")
                router.reload()
              }}>
              Log out
            </button>
          ) || (
            <button className='bg-red-700 px-2 py-1 font-medium text-slate-200  rounded-[3px]' onClick={() => { router.push("/Signupin") }}>
              Sign In
            </button>
          )
        }

      </div>
    </div>
  )
}
