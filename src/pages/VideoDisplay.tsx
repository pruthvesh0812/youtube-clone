import AppBar from '@/components/AppBar'
import VideoMiniCard from '@/components/VideoMiniCard'
import React from 'react'
import VideoBottomBar from '@/components/VideoBottomBar'
import Description from '@/components/Description'
// {imgSrc:"thumbnailPhoto.jpg" ,
//     title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
//     profileName:"Sadhguru",
//     views:"422K views", 
//     publishedOn:"Streamed 4 days ago" }

export default function VideoDisplay() {
    return (
        <div>
            <AppBar />
            <div className='grid grid-cols-10 mt-3 '>
                <div className="col-span-6 w-[90%] max-w-[1000px] max-h-96  justify-center ms-auto  mt-2">
                    <div>
                        <video src="/Video.mp4" className="w-full rounded-md " controls></video>
                    </div>
                    <div className='mt-2'>
                        <VideoBottomBar />
                        <Description />
                    </div>
                </div>
                <div className='col-span-4 ml-5 mt-2 flex flex-col gap-3'>
                    <VideoMiniCard title="Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST"
                        profileName="Sadhguru"
                        views="422K views"
                        publishedOn="Streamed 4 days ago"
                    />

                    <VideoMiniCard title="Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST"
                        profileName="Sadhguru"
                        views="422K views"
                        publishedOn="Streamed 4 days ago"
                    />
                    <VideoMiniCard title="Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST"
                        profileName="Sadhguru"
                        views="422K views"
                        publishedOn="Streamed 4 days ago"
                    />


                    <VideoMiniCard title="Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST"
                        profileName="Sadhguru"
                        views="422K views"
                        publishedOn="Streamed 4 days ago"
                    />


                    <VideoMiniCard title="Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST"
                        profileName="Sadhguru"
                        views="422K views"
                        publishedOn="Streamed 4 days ago"
                    />
                    <VideoMiniCard title="Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST"
                        profileName="Sadhguru"
                        views="422K views"
                        publishedOn="Streamed 4 days ago"
                    />
                </div>
            </div>
        </div>
    )
}
