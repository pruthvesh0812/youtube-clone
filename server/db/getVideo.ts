import { pool } from "./dbConnect";

export default async function getVideo(videoId:number){
    const getVideoQuery =  `
        SELECT * FROM videos WHERE videoId = $1;
    `

    const video = await pool.query(getVideoQuery,[videoId]);
    return video;
}