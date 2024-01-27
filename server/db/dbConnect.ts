import {Client} from 'pg'
export let client:Client;
export default async function getClient() {

        client = new Client("postgres://eaqngkws:5c8dyAWHhjUln0XHz3-y0MVBDPhD_WDy@batyr.db.elephantsql.com/eaqngkws")
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