import { NextApiRequest,NextApiResponse } from "next";
import jwt from 'jsonwebtoken';
import z, { string } from 'zod'
import { strict } from "assert";
import checkUser from "@/db/checkUser"

const signupInputParse = z.object({ 
    email:z.string().min(11),
    password:z.string().min(8)
})

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    const {email,password} = JSON.parse(req.body);
    const parsedInput = signupInputParse.safeParse({email,password});
    if(!parsedInput.success){
        if(await checkUser({email,password})){
            res.status(403).json({message:"user already exists"});
            return;
        }

        
    }
    res.status(200).json({username:"username1"});
}