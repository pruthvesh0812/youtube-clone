import {Client} from 'pg'
import dotenv from 'dotenv'

dotenv.config()

export let client:Client;

const POSTGRES_URL = process.env.POSTGRES_URL;
console.log('POSTGRES_URL:', POSTGRES_URL); 
export default async function getClient() {
    console.log('POSTGRES_URL:', POSTGRES_URL); 
        client = new Client(POSTGRES_URL)
        await client.connect()
        return client;
}

getClient().then((c)=>{
console.log(client);
}).catch(err=>{console.log(err,"error")});


// either put server files in a different folder , and there use {Pool} from 'pg', so that 
//we have a persistent connection

//or use a different database

// or use Prisma orm