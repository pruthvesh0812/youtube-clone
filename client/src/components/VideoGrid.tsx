import React from 'react'
import VideoCard from './VideoCard'
export const VIDEOS = [
    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },

    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },

    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },
    
    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },
    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },

    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },

    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },
    
    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },
    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },

    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },

    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },
    
    {imgSrc:"thumbnailPhoto.jpg" ,
    title:"Sadhguru Darshan on New Year's Eve – Live on 31 Dec | 6:45 PM IST" ,
    profileName:"Sadhguru",
    views:"422K views", 
    publishedOn:"Streamed 4 days ago" },
]

export default function VideoGrid() {

    
  return (
    <div className='grid grid-cols-1 px-4 sm:px-8 md:px-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
     {VIDEOS.map((video)=>
        <div className='px-3 pt-8'>
            <VideoCard 
                imgSrc={video.imgSrc} 
                title={video.title} 
            profileName={video.profileName}
            views={video.views}
            publishedOn={video.publishedOn} />
        </div>
     )}
    </div>
  )
}
