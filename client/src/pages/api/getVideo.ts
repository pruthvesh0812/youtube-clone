import { NextApiRequest,NextApiResponse } from "next";
import getVideo from '../../../../server/dist/db/getVideo'

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    try{

        const {video_id} = JSON.parse(req.body)
        console.log(video_id)
        const data = await getVideo(video_id);
        

        const clickedVideo = data.rows;
        res.status(200).json({message:"video retrived",clickedVideo})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }

}

