import { GetSignedUrlConfig, Storage } from '@google-cloud/storage';
import dotenv from 'dotenv'

dotenv.config();

export const storage = new Storage({          
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });

  export  const bucket = storage.bucket(process.env.BUCKET_NAME);

  
  export const createWriteStream = (filename: string, contentType?: string) => {
    const ref = bucket.file(filename);

    const stream = ref.createWriteStream({
        gzip: true,
        contentType: contentType,
    });

    return stream;
};


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
