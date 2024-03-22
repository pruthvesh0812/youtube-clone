import { pool } from "./dbConnect";

type video  = {
                    videoTitle:string,
                    videoDescription:string,
                    likeCount:number,
                    viewCount:number,
                    publishedDate:string,
                    thumbnailImageLink:string,
                    videoLink:string,
                    channelRefId:number,

}
            
export default async function uploadVideo(video:video){
    const uploadVideoQuery = `
        INSERT INTO videos (videoTitle,videoDescription,likeCount,viewCount,publishedDate,thumbnailImageLink,videoLink,channelRefId) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING videoId;
    `

    const videoId = await pool.query(uploadVideoQuery,[video.videoTitle,video.videoDescription,video.likeCount,video.viewCount,video.publishedDate,video.thumbnailImageLink,video.videoLink,video.channelRefId])
    return videoId;
}