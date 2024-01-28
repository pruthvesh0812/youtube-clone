import { NextApiRequest, NextApiResponse } from "next";

import checkUser from "../../../../server/dist/checkUser"

import createNewChannel from "../../../../server/dist/createNewChannel";
import checkUserJoinChannel from "../../../../server/dist/checkUserJoinChannel"
import uploadVideo from "../../../../server/db/uploadVideo"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try{
        const user = JSON.parse(req.cookies.user || '{}');
        const {userid,email,password} = user.payload;
        
        const {
                videoTitle,
                videoDescription,
                likeCount,
                viewCount,
                pulishedDate,
                thumbnailImageLink,
                videoLink
            } = JSON.parse(req.body);
        

        if(await checkUser({email,password})){   
            console.log("here")
            
            
            const channelId = await checkUserJoinChannel(userid)    
            console.log(channelId,"channel id")
            if(channelId){
                const channelRefId = channelId.rows[0].channelid;
                const videoId = await uploadVideo({videoTitle,
                    videoDescription,
                    likeCount,
                    viewCount,
                    pulishedDate,
                    thumbnailImageLink,
                    videoLink,
                    channelRefId
                })
            
                res.status(200).json({message:"video uploaded successfully",videoId})
            }
            
            res.status(404).json({message:"user channel not found"});
        }
        res.status(403).json({message:"no such user exists"});
    }
    catch(err){
        console.log(err,"error")
        res.status(500).json({error:"Internal Server Error",err});
    }


}