import { NextApiRequest,NextApiResponse } from "next";
import { inputValidate } from "@/lib/inputValidation";
import jwt from 'jsonwebtoken'
import { SECRET } from "@/config";

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    // console.log("sfsdfsd")
    try{
        // console.log(req.cookies,"request") - gives you all cookies
        const data = JSON.parse(req.cookies.user || "{}") // gives 'user' cookies
        const user = data.payload; // user has payload object and protectedHeader object , from that we choose payload
        res.status(200).json({email:user.email})
    }
    catch(err){res.status(500).json({error:"Internal Server Error"})}

}