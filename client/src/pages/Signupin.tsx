import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { user } from '@/store/atom/UserCreate'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import axios from 'axios'

export default function Signupin() {
    const [signIn, setSignIn] = useState<boolean>(false)
    const setUser = useSetRecoilState(user);
    const userr = useRecoilValue(user)
    const router = useRouter()

    if (signIn) {
        return (
            <div className='flex justify-center py-10 '>
                <div className='w-[25%]'>
                    <h1 className='text-center text-xl font-semibold'>Sign In</h1>
                    <input  
                        placeholder='Enter your Email' 
                        onChange={(e)=>{setUser((prev)=>({...prev,email:e.target.value}))}}
                        className='w-full border bg-transparent border-slate-500 rounded-xl px-2 py-2 font-sans mt-4 text-slate-400 ' />
                    <input 
                        placeholder='Enter your Password' 
                        onChange={(e)=>{setUser((prev)=>({...prev,password:e.target.value}))}}
                        className='w-full border bg-transparent border-slate-500 rounded-xl px-2 py-2 font-sans mt-4 text-slate-400' />
                    <button 
                        onClick={
                            async ()=> {
                                const result = await axios.post("http://localhost:3000/api/login",userr)
                                if(result){
                                    console.log(result.data)
                                    localStorage.setItem("token",result.data.token)
                                    router.push("/")

                                }
                            }
                        }
                        className='rounded-md w-full bg-red-700 text-slate-100 py-2 mt-4'>
                            Sign In
                        </button>
                    <div className='flex mt-6 justify-center'>
                        <p className='text-slate-100  text-md mr-1'>New User?   |   </p>

                        <label className='text-blue-800  text-md' onClick={() => { setSignIn(false) }}> Sign Up</label>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='flex justify-center py-10 '>
                <div className='w-[25%]'>
                    <h1 className='text-center text-xl font-semibold'>Sign Up</h1>
                    <input 
                        placeholder='Enter your Email' 
                        onChange={(e)=>{setUser((prev)=>({...prev,email:e.target.value}))}}
                        className='w-full border bg-transparent border-slate-500 rounded-xl px-2 py-2 font-sans mt-4 text-slate-400 ' />
                    <input 
                        placeholder='Enter your Password'
                        onChange={(e)=>{setUser((prev)=>({...prev,password:e.target.value}))}}
                        className='w-full border bg-transparent border-slate-500 rounded-xl px-2 py-2 font-sans mt-4 text-slate-400' />
                    <button 
                        onClick={
                            async ()=> {
                                const result = await axios.post("http://localhost:3000/api/signup",userr)
                                if(result){
                                    console.log(result.data)
                                    localStorage.setItem("token",result.data.token)
                                    router.push("/")
                                }
                            }
                        }
                        className='rounded-md w-full bg-red-700 text-slate-100 py-2 mt-4'>
                            Sign Up
                        </button>
                    <div className='flex mt-6 justify-center'>
                        <p className='text-slate-100 text-md mr-1'>Already have an account?   |   </p>

                        <label className='text-blue-800 text-md  ' onClick={() => { setSignIn(true) }}> Sign In</label>
                    </div>
                </div>
            </div>
        )
    }

}
