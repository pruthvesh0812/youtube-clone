import { NextApiRequest, NextApiResponse } from "next";

import checkUser from "../../../../server/dist/checkUser"

import createNewChannel from "../../../../server/dist/createNewChannel";
import checkUserJoinChannel from "../../../../server/dist/checkUserJoinChannel"
import uploadVideo from "../../../../server/dist/db/uploadVideo"

import { SignedPostPolicyV4Output } from "@google-cloud/storage";
import { Storage } from "@google-cloud/storage";
import multer from 'multer'
import formidable from 'formidable'
import { parseForm} from "@/lib/parseForm";

import dotenv from 'dotenv'

dotenv.config();

const storage = new Storage({          
                    projectId: process.env.PROJECT_ID,
                    credentials: {
                      client_email: process.env.CLIENT_EMAIL,
                      private_key: process.env.PRIVATE_KEY,
                    },
                  });


const bucket = storage.bucket(process.env.BUCKET_NAME);

// const upload = multer();

// Extends NextApiRequest interface to include files property
interface CustomNextApiRequest extends NextApiRequest {
    files?: formidable.Files;
  }
  


// disable the default body parser of next req
// so that formidable body parser can work
export const config = {
    api: {
      bodyParser: false,
    },
  };



export default  async function handler(
    req: CustomNextApiRequest,
    res: NextApiResponse
) {
    // upload.single('video')
    console.log("request",req)
    if (req.method !== "POST") {
        res.status(405).json("Method not allowed");
        console.log("give post please")
        return;
      }


     

     
        const { fields, files } = await parseForm(req);
       
          

         console.log("files",files,"fields",fields)

      // Implement your logic for handling the uploaded file
      
        // req.files = files;
        // const obj:{videoBase64:string} = req.body;
        // const user = JSON.parse(req.cookies.user || '{}');
        // const { userid, email, password } = user.payload;
        // console.log(user,obj.videoBase64)
        // const video_base64 = JSON.parse(req.body);
        // console.log(video_base64,"video_base64")
        // console.log(req.cookies)
 
        // console.log("<<<<<<<<< video 64 base string >>>>>>>>",obj.videoBase64)
        
        // console.log(user)

        // console.log(req.files,"files")

      
        
        // const {
        //         videoTitle,
        //         videoDescription,
        //         likeCount,
        //         viewCount,
        //         pulishedDate,
        //         thumbnailImageLink,
        //         videoLink
        //     } = JSON.parse(req.body);
        
        
        // if(await checkUser({email,password})){   
            //     console.log("here")
            
            
        //     const channelId = await checkUserJoinChannel(userid)    
        //     console.log(channelId,"channel id")
        //     if(channelId){
        //         const channelRefId = channelId.rows[0].channelid;
            
                
        //         // const file = bucket.file();
        //         const options = {
            //             expires: Date.now() + 5 * 60 * 1000, //  5 minutes,
            //             fields: { "x-goog-meta-source": "youtube-clone-videos" },
        //           };

        //         // const [response] = await file.generateSignedPostPolicyV4(options)
        //         // console.log(response,"response")
        
        //         const videoId = await uploadVideo({videoTitle,
        //             videoDescription,
        //             likeCount,
        //             viewCount,
        //             pulishedDate,
        //             thumbnailImageLink,
        //             videoLink,
        //             channelRefId
        //         })
        
                res.status(200).json({message:"video uploaded successfully"})
   
        // res.status(200).json({message:"no such user exists"});
  
        
        
      
   


}