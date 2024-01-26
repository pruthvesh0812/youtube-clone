import {Client} from 'pg'
let client:Client;
let isConnected = false;
export default async function getClient() {

    if(isConnected == true ){
        console.log("connected true")
        return client;
    }
    else{
        isConnected = true
        console.log("connected false")
        client = new Client("postgres://eaqngkws:5c8dyAWHhjUln0XHz3-y0MVBDPhD_WDy@batyr.db.elephantsql.com/eaqngkws")
        await client.connect()
        return client;
    }
    
}


