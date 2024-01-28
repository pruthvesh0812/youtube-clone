import { NextApiRequest, NextApiResponse } from "next";

import checkUser from "../../../../server/dist/checkUser"

import createNewChannel from "../../../../server/dist/createNewChannel";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try{
        const user = JSON.parse(req.cookies.user || '{}');
        const {userid,email,password} = user.payload;
        
        const {channelName,channelSubscribers,channelProfilePhotoLink} = JSON.parse(req.body);
        
        if(await checkUser({email,password})){        
            let userRefId = userid;
            const channelId = await createNewChannel({channelName,channelSubscribers,channelProfilePhotoLink,userRefId});
            res.status(200).json({message:"channel created Successfully",channelId});
        }
        res.status(403).json({message:"no such user exists"});
    }
    catch(err){
        res.status(500).json({error:"Internal Server Error"});
    }


}