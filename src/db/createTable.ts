import getClient from "./utils"

async function createTables(){
    const client = await getClient();
    const userTableQuery = `
        CREATE TABLE  users (
            userId SERIAL PRIMARY KEY NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `

    await client.query(userTableQuery);

    const channelTableQuery = `
            CREATE TABLE channels (
                channelId SERIAL PRIMARY KEY NOT NULL,
                channelName VARCHAR(255) UNIQUE NOT NULL,
                channelSubscribers INTEGER NOT NULL,
                channelProfilePhotoLink VARCHAR(1023) UNIQUE NOT NULL,
                userRefId INTEGER REFERENCES users(userId)
            );
    `
    await client.query(userTableQuery);

    const videoTableQuery = `
                CREATE TABLE videos(
                    videoId SERIAL PRIMARY KEY NOT NULL,
                    videoTitle VARCHAR(511) NOT NULL,
                    videoDescription VARCHAR(4095) NOT NULL,
                    likeCount INTEGER NOT NULL,
                    viewCount INTEGER NOT NULL,
                    pulishedDate VARCHAR(20) NOT NULL,
                    thumbnailImageLink VARCHAR(1023) NOT NULL,
                    channelRefId INTEGER REFERENCES channels(channelId)
                );
    `

    await client.query(videoTableQuery);
}
