import { GetSignedUrlConfig, Storage } from '@google-cloud/storage';
import dotenv from 'dotenv'

dotenv.config();
const bucketName = process.env.BUCKET_NAME;
export const storage = new Storage({          
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY.split(String.raw`\n`).join("\n"),
    },
  });

export const getObjectPublicUrl = async (fileName:string) =>{
    const [metadata] = await storage.bucket(process.env.BUCKET_NAME).file(fileName).getMetadata();
  
    // Construct the public URL using the object's name and the bucket's public URL
    const publicUrl = `https://storage.googleapis.com/${process.env.BUCKET_NAME}/${metadata.name}`;
  
    return publicUrl;
  }

export const bucket = storage.bucket(process.env.BUCKET_NAME);

export const getSignedUrl = async (filename: string) => {
  try {
    const options:GetSignedUrlConfig = {
      version: 'v4',
      action: 'read',
      expires: Date.now() + 30 * 60 * 1000, // Convert to milliseconds
    };

    const signedUrl = bucket.file(filename).getSignedUrl(options);

    console.log('Signed URL:', signedUrl);
  } catch (error) {
    console.error('Error generating signed URL:', error);
  }
};
