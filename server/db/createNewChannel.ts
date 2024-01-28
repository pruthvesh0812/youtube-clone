import { pool } from "./dbConnect";

type channel = {
    channelName:string,
    channelSubscribers:string,
    channelProfilePhotoLink:string,
    userRefId:number
}

export default async function createNewChannel(channel:channel){
    const createUserChannelQuery = `
        INSERT INTO channels (channelName,channelSubscribers,channelProfilePhotoLink,userRefId) VALUES ($1,$2,$3,$4) RETURNING channelId;
    `
    const channelId = await pool.query(createUserChannelQuery,[channel.channelName,channel.channelSubscribers,channel.channelProfilePhotoLink,channel.userRefId])
    return channelId;
}