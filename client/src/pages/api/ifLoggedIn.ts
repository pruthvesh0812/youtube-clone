import { NextApiRequest,NextApiResponse } from "next";
import { inputValidate } from "@/lib/inputValidation";
import jwt from 'jsonwebtoken'
import { SECRET } from "@/config";

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    try{
        // console.log(req,"request")
        const user = JSON.parse(req.cookies["user"] || "{}")
        // console.log(user);
        res.status(200).json({email:user.email})
    }
    catch(err){res.status(500).json({error:"Internal Server Error"})}

}