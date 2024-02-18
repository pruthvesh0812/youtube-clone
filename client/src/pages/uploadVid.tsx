import React from 'react'
import SideBar from '@/components/SideBar'
import { useState, ChangeEvent, FormEvent } from "react";
import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from "cookies-next";

import dotenv from 'dotenv'
dotenv.config()

export default function uV() {
  const [videoSrc, setVideoSrc] = useState<Buffer>();
  const [videoFile, setVideoFile] = useState<File>();
  const [videoDetails, setVideoDetails] = useState({});

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEle = e.target as HTMLInputElement;

    if (inputEle.files && inputEle.files.length > 0) {
      setVideoFile(inputEle.files?.[0]) // set actual file

      const reader = new FileReader();

      reader.onload = function (onLoadEvent) {  // base 64 conversion increases the size of file by 33%
        const binaryData: string | null = onLoadEvent.target?.result as string;

        const imageBuffer = Buffer.from(binaryData.split(';')[1].split(',')[1], 'base64'); // converting to buffer other wise browser wont render it , if directly send the encoded file or just the base64 string
        setVideoSrc(imageBuffer) // setting base 64 string of file
        const data = onLoadEvent.target?.result as string
        console.log(binaryData, "bin")
        // console.log(data.split(';')[1].split(',')[1])
      }

      reader.readAsDataURL(inputEle.files[0])
    }
  }


  // to send video file to gcs
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!videoFile) return // very important to handle edge case of file being undefined

    try {
      setCookie('userTokenCookie', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImVtYWlsIjoicHJ1dGh2ZXNoQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicHJ1dGh2ZXNoIiwiZXhwIjoxNzA4MjcyMjEwLCJpYXQiOjE3MDgyNjE0MTAsIm5iZiI6MTcwODI2MTQxMH0.a8LiNxbryGtR0upYZxwF9BF0f0QtnrHN0UaaX-gMp5I')

      // const filename = encodeURIComponent(videoFile.name);
      console.log(videoFile, "videoFile")
      const res = await axios.get(`/api/gcsUrl?file=${videoFile.name}`);
      const url = res.data
      console.log(url, 'url')
      // const formData = new FormData();
      // Object.entries({ ...fields, videoFile }).forEach(([key, value]) => {
      //     console.log(value,'value')
      //     formData.set(key, value as Blob);

      // });
      // formData.set('file',videoFile) //not .append but .set 

      console.log("sdfsad")
      axios.put(url, videoSrc, {
        headers: {
          'Content-Type': videoFile.type,
        },
      }).then((res) => {
        console.log(res, "uploaded to gcs")

        setVideoDetails((prevDetail) => ({
          ...prevDetail,
          likeCount: 0,
          viewCount: 0,
          pulishedDate: Date(),
          thumbnailImageLink: "somegebbijsldfk",
          videoLink:`https://storage.googleapis.com/${process.env.BUCKET_NAME}/${videoFile.name}`

        }))

       

      }).catch((err) => {
        console.log(err)
      })


      console.log('video detail', videoDetails)

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
            type="text"
            onChange={(e) => {
              setVideoDetails((prevDetail) => ({ ...prevDetail, videoTitle: e.target.value }))
            }}
            name='title'
            placeholder="Enter Video Title" />

          <input className="my-4 border rounded-md h-8 bg-transparent border-slate-200 hover:border-b-blue-900"
            type="text"
            onChange={(e) => {
              setVideoDetails((prevDetail) => ({ ...prevDetail, videoDescription: e.target.value }))
            }}
            name='description'
            placeholder="Enter Video Description" />

          <input className="my-4 border rounded-md h-8 bg-transparent border-slate-200 hover:border-b-blue-900"
            type="file"
            onChange={handleOnChange}
            name='videoFile'
            placeholder="Upload Video" />



          {/* preview video here */}
          {/* {(videoSrc != "") &&
            <video src={videoSrc} controls={true}></video>
          } */}
          <button className="py-3 px-6 border-blue-500 bg-cyan-950 text-teal-50" type='submit'>Upload</button>
        </form>
      </div>
    </div>
  )
}


// https://ffe78ce8be8e19999cda39049d5635d2f516a14e33929c46756b64d-apidata.googleusercontent.com/download/storage/v1/b/bucket-youtube-clone-store-videos-encoded-08/o/uV.tsx%20-%20youtube-clone%20-%20Visual%20Studio%20Code%202024-02-04%2016-30-56.mp4?jk=ATxpoHcDav4WE7wOJSXVOdBNfMS1qq8Il0yNjkKTeBue-LzQPbNJFR2MH9X5SPVYOfFKgVOAQ034tFMHLitrG73FD5YobNjUSMNUTTabnzJn_Y9PlO9QYSaP02kQ4Tj9HSFi5_l-8NaGOmrPDZLJLqJKFVEDk1SdC2gXFqjJVtngZ41WuR88_wrdYL1Geuxana-e1ZfPXvZWCPfyciFAXe5N469akuJ1ZQzOQ47FcaHRnuQNYDoF_3ljGmh2mlkCF9LGX_IheQlmp6qvFlr5MxDA4cyeMnv2eY7pKfp8yh0qXWDWEa0_he2tpiZcH1ElU1s59eY1lGdYzZFF-eHS-08wsudVruEy1QP5O0xUKhuZjRwHWx1mWKJB0RT3ejF2gNP8cxQ876tDrVlngRyt-SldLz0nFYkulwtf1LSA1UV7-Ndo-6BehNh8-UPw_rYnIvwoNipRsZVbnynt2O62Dr4_KzBSjn_pB6ErKoHTd7W5LSsA2JyodPd5LhnaNwPpTTWPuSpRox2_JlEphylSm162N9mKcqdqgS6h5qjQUTFLQrMRuRkMcRpWYjG-uv98JBguwihPTT7I1838noEnbCJBlaAGqZclBqURzi7k84QXgB_7SqpwsQWDyQdnWa2--3E3IApsiGs3BWaqckY5C3iIjkHqg560UvF-HuSxVQ6SvHni84EyjE9nGCVnZrK5POEtP_9BDEAa4lMQ1LSysQLn0Mz7blBHekKrlL3RCMuxgB1p2Ivf0TC4ed6dqAoVEcNQi3U55sMBYADwoqTmi5eZZUMxcFzfGeCRI09K1UeRySjKRcuHc8qwqvdUT3KtvwVH_RukgPgp815yUIeGzGjnhDVyeRinPCYz3ODPSMzNV84_YJJKx-ceEFT_HtYRjrWKVurgOzWKfb4FrbBnQq81s4UnkzvpKRkfVTe5aqTydwN0VFxR675caGXf8zTczROV_1aPzSuGi9XtQuXXqZm4a-7y6GTyc_krTWTUkzdLHBmaUHb7fDRvgNukUFvqWwyUuASWxugKkqEZsRS9M6Vn8KavYI44Yl8LR3IeM4XdHkYKQ7eTxZMgQGrdTidN0ZA61UDp9gpS2xaUAiTv5YNn4Q_hp53xm8f9QO2wCblGOp-oqUV8HTweW_fnbeBiQH-Gbls1nwnf35IepoylXYcjYr3vwe9xaBGR_fGrUu4eE8NAa1prPc-zMXDnYPpOFFzEI0Uxb5B5g1f29IWavptrgpy1Cw51AiEBWA&isca=1