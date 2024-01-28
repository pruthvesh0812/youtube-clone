import { NextApiRequest, NextApiResponse } from "next";
import { inputValidate } from "@/lib/inputValidation";
import checkUser from "../../../../server/dist/checkUser";
import jwt from 'jsonwebtoken'
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';   

import { log } from "console";
import { SECRET } from "@/config";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const loginInput: { email: string, password: string } = JSON.parse(req.body);
    const parsedInput = inputValidate.safeParse(loginInput);

    if (!parsedInput.success) {
        res.status(401).json({ message: "wrong input" });
        return;
    }

    const userId = await checkUser(loginInput);
    if (userId) {
        const userid = userId.rows[0].userid;
        const user = { userid , ...loginInput };
        const token = await new SignJWT({...user})
                            .setProtectedHeader({alg:'HS256',typ:"JWT"})
                            .setExpirationTime((Math.floor(Date.now()/1000)) + 60 * 60 * 3)
                            .setIssuedAt((Math.floor(Date.now()/1000)))
                            .setNotBefore((Math.floor(Date.now()/1000)))
                            .sign(new TextEncoder().encode(SECRET));

        console.log(token,"token")                            
        // jwt.sign({ userId, ...loginInput }, SECRET, { expiresIn: '3hr' });
        res.status(200).json({ token, message: "logged in successfull" });
    }
    else {
        res.status(403).json({ message: "User does not exist" })
    }

}