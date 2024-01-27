import { NextApiRequest,NextApiResponse } from "next";
import { inputValidate } from "@/lib/inputValidation";
import jwt from 'jsonwebtoken'
import { SECRET } from "@/config";
import {Client} from 'pg'
import {POSTGRES_URl} from "@/config"

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
  
    const client = new Client(POSTGRES_URl)
    await client.end()
    console.log(client,"relased db")
    res.status(200).json({ message: "relased db" });
}