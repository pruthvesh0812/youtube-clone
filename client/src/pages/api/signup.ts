import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';

import z from 'zod'
import checkUser from "../../../../server/dist/checkUser"
import createNewUser from "../../../../server/dist/createNewUser";
import createNewChannel from "../../../../server/dist/createNewChannel";
import { SECRET } from "@/config";
import { inputValidate } from "@/lib/inputValidation";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const { email, password }: { email: string, password: string } = JSON.parse(req.body);
    const parsedInput = inputValidate.safeParse({ email, password });
    if (!parsedInput.success) {
        res.status(401).json({ message: "wrong input" });
        return;
    }


    if (await checkUser({ email, password })) {
        res.status(403).json({ message: "user already exists" });
        return;
    }

    const userId = await createNewUser({ email, password });
    console.log("new user id",userId)
    const userid = userId.rows[0].userid;
    const user = { userId, email, password };
    const token = new SignJWT({...user})
                            .setProtectedHeader({alg:'HS256',typ:"JWT"})
                            .setExpirationTime((Math.floor(Date.now()/1000)) + 60 * 60)
                            .setIssuedAt((Math.floor(Date.now()/1000)))
                            .setNotBefore((Math.floor(Date.now()/1000)))
                            .sign(new TextEncoder().encode(SECRET));
    // const token = jwt.sign({ userId, email, password }, SECRET, { expiresIn: '3hr' })

    res.status(200).json({ token: token, message: "account created successfully" });

}