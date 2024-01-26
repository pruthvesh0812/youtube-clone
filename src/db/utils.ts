import {Client} from 'pg'

export default async function getClient() {
    const client = new Client("postgres://eaqngkws:5c8dyAWHhjUln0XHz3-y0MVBDPhD_WDy@batyr.db.elephantsql.com/eaqngkws")
    await client.connect()
    return client;
}