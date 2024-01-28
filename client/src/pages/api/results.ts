import { NextApiRequest,NextApiResponse } from "next";
import searchVideo from '../../../../server/dist/db/searchVideo-ts_vector'

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    try{

        const search_query = req.query.search_query as string;
        console.log(search_query)
        const data = await searchVideo(search_query);
        console.log(data)
        if(data.rowCount == 0){
            
            // res.setHeader('Location',"/api/home") //redirecting to /api/home
            // res.statusCode = 302;
            console.log(req.url)
            res.status(404).json({message:"searched video not found"})
            
            //res.status(302).redirect("/api/home") 
            // redirecting to /api/home when no searched videos found

            
            
        }
        const matched_videos = data.rows;
        res.status(200).json({message:"video found",matched_videos})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }

}

