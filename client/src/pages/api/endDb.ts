import { NextApiRequest,NextApiResponse } from "next";
import { inputValidate } from "@/lib/inputValidation";
import jwt from 'jsonwebtoken'
import { SECRET } from "@/config";
import {Client} from 'pg'

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
  
    const client = new Client("postgres://eaqngkws:5c8dyAWHhjUln0XHz3-y0MVBDPhD_WDy@batyr.db.elephantsql.com/eaqngkws")
    await client.end()
    console.log(client,"relased db")
    res.status(200).json({ message: "relased db" });
}