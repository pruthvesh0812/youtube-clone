import {Client,Pool} from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export let client:Client;

export const pool = new Pool({
    host:"batyr.db.elephantsql.com",
    port:5432,
    user:"eaqngkws",
    password:"5c8dyAWHhjUln0XHz3-y0MVBDPhD_WDy",
    database:"eaqngkws",
    max:15
})

// const POSTGRES_URL = process.env.POSTGRES_URL;
// console.log('POSTGRES_URL:', POSTGRES_URL); 
// export default async function getClient() {
//     console.log('POSTGRES_URL:', POSTGRES_URL); 
//         client = new Client(POSTGRES_URL)
//         await client.connect()
//         return client;
// }

// getClient().then((c)=>{
// console.log(client);
// }).catch(err=>{console.log(err,"error")});


// either put server files in a different folder , and there use {Pool} from 'pg', so that 
//we have a persistent connection

//or use a different database

// or use Prisma orm