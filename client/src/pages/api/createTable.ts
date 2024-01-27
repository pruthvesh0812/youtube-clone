import { NextApiRequest, NextApiResponse } from "next";
import createTables from "../../../../server/db/createTable";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await createTables();

    res.status(200).json({ message: "tables created" });
}