import { NextApiRequest, NextApiResponse } from "next";

import checkUser from "../../../../server/dist/checkUser"

import createNewChannel from "../../../../server/dist/createNewChannel";
import checkUserJoinChannel from "../../../../server/dist/checkUserJoinChannel"
import uploadVideo from "../../../../server/dist/db/uploadVideo"

import { SignedPostPolicyV4Output } from "@google-cloud/storage";
import { Storage ,GetSignedUrlConfig } from "@google-cloud/storage";
import multer from 'multer'
import formidable from 'formidable'
import rawBody from 'raw-body';

import dotenv from 'dotenv'

dotenv.config();

import * as gcs from '@/lib/gcsClient';
import { NextRequest } from "next/server";
import { URL } from "url";

import { IncomingForm } from 'formidable';
import { writeFile } from "fs/promises";
import { join } from "path";
// const upload = multer();
// import fs from 'fs';
import { createReadStream } from "fs"
// Extends NextApiRequest interface to include files property
interface CustomNextApiRequest extends NextApiRequest {
    files?: formidable.Files;
  }

  // to disable the default body parser which cannot parse large files
export const config = {
  api: {
    bodyParser: false,
  },
};
  



export default  async function handler(
    req: CustomNextApiRequest,
    res: NextApiResponse
) {

    console.log("request",req)

    if (req.method !== "POST"){
        res.status(405).json("Method not allowed");
    }
   
    
    const form = new IncomingForm() // and not new formidable.IncomingForm()

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ message: "Error parsing form data" });
        return;
      }

      if(!files){
        return res.status(400).json({message:"no file uploaded"})
      }

      if(files.file){

        console.log(files,"file",files.file[0]?.originalFilename)

        const user = JSON.parse(req.cookies.user || '{}');
        const { userid, email, password } = user.payload;

        await gcs.bucket.upload(files.file[0]?.filepath,{
          metadata: {
            contentType: files.file[0]?.mimetype as string,
          }
        })

         const url = gcs.getSignedUrl(files.file[0]?.originalFilename as string)
        //       // console.log(url)
        // createReadStream(files.file[0]?.filepath)
        //   .pipe(gcs.createWriteStream(files.file[0]?.originalFilename as string, files.file[0]?.mimetype as string))
        //   .on("finish", () => {
        //     if(files.file){
        //       // const url = gcs.getSignedUrl(files.file[0]?.originalFilename as string)
        //       // console.log(url)
        //       res.status(200).json({message:"file uploaded successfully"});
        //     }
        //   })
        //   .on("error", (err) => {
        //       console.error(err.message);
        //       res.status(500).json("File upload error: " + err.message);
        // });
      
        
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
            
                
                // const options: GetSignedUrlConfig= {
                  //   version: 'v4',
                  //   action: 'read',
                  //   expires: Date.now() + 30 * 60 * 1000, //  30 minutes,
        
                  // };

                   // Upload the file to Google Cloud Storage
                  //  const file = bucket.file(files.file[0]?.originalFilename as string);

  

//                
//                    
//             

//         //         const videoId = await uploadVideo({videoTitle,
//         //             videoDescription,
//         //             likeCount,
//         //             viewCount,
//         //             pulishedDate,
//         //             thumbnailImageLink,
//         //             videoLink,
//         //             channelRefId
//         //         })
            
//         //         res.status(200).json({message:0deoId})
//         //     }
            
//         //     res.status(404).json({message:"user channel not found"});
//         // }
//         // res.status(200).json({message:"no such user exists"});
      
          // const stream = file.createWriteStream({
          //   metadata: {
          //     contentType: files.file[0]?.mimetype as string,
          //   },
          // });

          // stream.on('error', (error) => {
          //   throw error;
          // });

          // stream.on('finish', () => {
            res.status(200).json({ message: 'File uploaded successfully',url });
          // });

          // stream.end(files.file[0]?.buffer);
        
              
//       }
console.log("uploaded successfully")
    
// })
}
})}