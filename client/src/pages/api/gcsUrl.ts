import { Storage , GetSignedUrlConfig} from '@google-cloud/storage';
import { NextApiRequest, NextApiResponse } from 'next';
import { storage } from '@/lib/gcsClient';

export default async function handler(
  req: NextApiRequest, res: NextApiResponse
) {

    console.log(req.query.file as string,"req file")
    const bucket = storage.bucket(process.env.BUCKET_NAME);

    const now = Date.now();
    const expires = new Date(now + 24 * 60 * 60 * 1000);

    const url = await bucket.file(req.query.file as string).getSignedUrl({
    expires: expires.getTime(),
    version: "v4",
    action: "write",

    });

    console.log(url,"url")
    res.status(200).json(url);

  // const file = bucket.file(req.query.file as string);

  // const options:GetSignedUrlConfig = {
  //   version: "v4",
  //   action: "write",
  //   expires: Date.now() + 10 * 60 * 1000, //  10 minute,

  // };


  // const [url] = await file.getSignedUrl(options);
  // const [response] = await file.generateSignedPostPolicyV4(options);
}