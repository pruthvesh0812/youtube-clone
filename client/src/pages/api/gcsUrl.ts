import { Storage , GetSignedUrlConfig} from '@google-cloud/storage';
import { NextApiRequest, NextApiResponse } from 'next';
import { storage } from '@/lib/gcsClient';

export default async function handler(
  req: NextApiRequest, res: NextApiResponse
) {


  const bucket = storage.bucket(process.env.BUCKET_NAME);
  const file = bucket.file(req.query.file as string);

  const options:GetSignedUrlConfig = {
    version: "v4",
    action: "write",
    expires: Date.now() + 10 * 60 * 1000, //  10 minute,

  };


  const [url] = await file.getSignedUrl(options);
  console.log(url,"url")
  // const [response] = await file.generateSignedPostPolicyV4(options);
  res.status(200).json(url);
}