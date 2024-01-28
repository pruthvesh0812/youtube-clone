import { NextApiRequest,NextApiResponse } from "next";
// import { pool } from "../../../../server/db/dbConnect"; // nextjs dev server cant run this
                                                        //  type of .ts file directly 
                                                        // .ts cant run in browser, there only .js works
                                                        // other .ts and .tsx that next runs, are first converted to .js and then rendered or exe. on broswer
import { pool } from "../../../../server/dist/dbConnect.js"; // so we need to give the dbConnect.js file to this 

type data = {numVideoToFetch:number,startVideoId:number}

//get video for home page
export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    try{
        const {numVideoToFetch,startVideoId}:data = JSON.parse(req.body);
        const getVideoQuery = `
            SELECT * FROM videos LIMIT $1 OFFSET $2; 
        `
        
        const videos = await pool.query(getVideoQuery,[numVideoToFetch,startVideoId]);
        console.log(videos);
        let videoArr = videos.rows
        res.status(200).json({message:"videos retrieval success",videoArr})
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }
    
}