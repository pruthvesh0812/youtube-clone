import { NextApiRequest, NextApiResponse } from "next";
import checkUser from "../../../../server/dist/checkUser"
import checkUserJoinChannel from "../../../../server/dist/checkUserJoinChannel"
import uploadVideo from "../../../../server/dist/db/uploadVideo"
import dotenv from 'dotenv'
import { getObjectPublicUrl } from '@/lib/gcsClient';

dotenv.config();



export default  async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method !== "POST"){
        res.status(405).json("Method not allowed");
    }
   
    const user = JSON.parse(req.cookies.user || '{}');
    const { userid, email, password } = user.payload;

    
    const {     videoTitle,
                videoDescription,
                likeCount,
                viewCount,
                pulishedDate,
                thumbnailImageLink,
                fileName
      } = req.body;
        
      console.log(req.body)
      if(await checkUser({email,password})){ 
          
          console.log("here")
          
          const channelId = await checkUserJoinChannel(userid)    
          console.log(channelId,"channel id")
          if(channelId){
              const channelRefId = channelId.rows[0].channelid;
              const videoLink = await getObjectPublicUrl(fileName)
              
              console.log(videoLink,' of video titled:', videoTitle);

              const videoId = await uploadVideo({videoTitle,
                        videoDescription,
                        likeCount,
                        viewCount,
                        pulishedDate,
                        thumbnailImageLink,
                        videoLink,
                        channelRefId
                    })
            
                res.status(200).json({message:"video uploaded successfuly"})
            }
            
            res.status(404).json({message:"user channel not found"});
        }
        res.status(200).json({message:"no such user exists"});
      
  
    
}