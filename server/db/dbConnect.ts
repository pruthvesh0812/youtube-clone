import {Client} from 'pg'
const POSTGRES_URl = process.env.POSTGRES_URl;
export let client:Client;
export default async function getClient() {

        client = new Client(POSTGRES_URl)
        await client.connect()
        return client;
}

getClient().then((c)=>{
console.log(client,"client");
}).catch(err=>{console.log(err,"error")});


// either put server files in a different folder , and there use {Pool} from 'pg', so that 
//we have a persistent connection

//or use a different database

// or use Prisma orm