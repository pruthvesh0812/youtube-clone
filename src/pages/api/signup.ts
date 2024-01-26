import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';
import z from 'zod'
import checkUser from "@/db/checkUser"
import createNewUser from "@/db/createNewUser";
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
    const token = jwt.sign({ userId, email, password }, SECRET, { expiresIn: '3hr' })

    res.status(200).json({ token: token, message: "account created successfully" });

}