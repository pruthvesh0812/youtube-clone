import React from 'react'
import SideBar from '@/components/SideBar'
import { useState, ChangeEvent, FormEvent } from "react";
import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from "cookies-next";

export default function uV() {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [videoFile, setVideoFile] = useState<File>();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEle = e.target as HTMLInputElement;

    if (inputEle.files && inputEle.files.length > 0) {
      setVideoFile(inputEle.files?.[0]) // set actual file

      const reader = new FileReader();

      reader.onload = function (onLoadEvent) {  // base 64 conversion increases the size of file by 33%
        setVideoSrc(onLoadEvent.target?.result as string) // setting base 64 string of file
        const data = onLoadEvent.target?.result as string
        console.log(data.split(';')[1].split(',')[1])
      }

      reader.readAsDataURL(inputEle.files[0])
    }
  }


  // to send video file to gcs
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!videoFile) return // very important to handle edge case of file being undefined

    try {
      setCookie('userTokenCookie', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImVtYWlsIjoicHJ1dGh2ZXNoQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicHJ1dGh2ZXNoIiwiZXhwIjoxNzA3Mjk1MjExLCJpYXQiOjE3MDcyODQ0MTEsIm5iZiI6MTcwNzI4NDQxMX0.7sISTsmw9kRQ__fmNKEzQlMcPMFYU0BZDmafh6V4PxY')

      // const filename = encodeURIComponent(videoFile.name);
      const res = await axios.get(`/api/gcsUrl?file=${videoFile.name}`);
      const { url, fields } = res.data;
      console.log(url, 'url')
      // const formData = new FormData();
      // Object.entries({ ...fields, videoFile }).forEach(([key, value]) => {
      //     console.log(value,'value')
      //     formData.set(key, value as Blob);

      // });
      // formData.set('file',videoFile) //not .append but .set 

      const upload = await axios.put(url, videoFile, {
        headers: {
          'Content-Type': `${videoFile.type}`,
          // 'Content-Type': 'multipart/form-data',
        },
        // withCredentials: true,
      }).catch((err) => {
        console.log(err)
      })

      console.log(upload, "upload")

    }
    catch (err) {
      console.log("some error occured:", err)
    }
  }


  return (
    <div className="flex">
      <SideBar />
      <div className="px-40 flex flex-col">
        <form className="flex flex-col" method='post' onSubmit={handleOnSubmit}>
          <input className="my-4 border rounded-md h-8 bg-transparent border-slate-200 hover:border-b-blue-900"
            type="file"
            onChange={handleOnChange}
            name='videoFile'
            placeholder="Upload Video" />

          {/* preview video here */}
          {(videoSrc != "") &&
            <video src={videoSrc} controls={true}></video>
          }
          <button className="py-3 px-6 border-blue-500 bg-cyan-950 text-teal-50" type='submit'>Upload</button>
        </form>
      </div>
    </div>
  )
}
