import { NextApiRequest, NextApiResponse } from "next";
import { inputValidate } from "@/lib/inputValidation";
import checkUser from "@/db/checkUser";
import jwt from 'jsonwebtoken'
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
        const token = jwt.sign({ userId, ...loginInput }, SECRET, { expiresIn: '3hr' });
        res.status(200).json({ token, message: "logged in successfull" });
    }
    else {
        res.status(403).json({ message: "User does not exist" })
    }

}