
import { pool } from './dbConnect';


export default async function createTables() {
    
    // const userTableQuery = `
    //     CREATE TABLE  users (
    //         userId SERIAL PRIMARY KEY NOT NULL,
    //         email VARCHAR(255) UNIQUE NOT NULL,
    //         password VARCHAR(255) NOT NULL
    //     );
    // `

    // await pool.query(userTableQuery);

    // const channelTableQuery = `
    //         CREATE TABLE channels (
    //             channelId SERIAL PRIMARY KEY NOT NULL,
    //             channelName VARCHAR(255) UNIQUE NOT NULL,
    //             channelSubscribers INTEGER NOT NULL,
    //             channelProfilePhotoLink VARCHAR(1023) UNIQUE NOT NULL,
    //             userRefId INTEGER REFERENCES users(userId)
    //         );
    // `
    // await pool.query(channelTableQuery);

    const videoTableQuery = `
                CREATE TABLE videos(
                    videoId SERIAL PRIMARY KEY NOT NULL,
                    videoTitle VARCHAR(511) NOT NULL,
                    videoDescription VARCHAR(4095) NOT NULL,
                    likeCount INTEGER NOT NULL,
                    viewCount INTEGER NOT NULL,
                    publishedDate VARCHAR(100) NOT NULL,
                    thumbnailImageLink VARCHAR(1023) NOT NULL,
                    videoLink VARCHAR(4095) NOT NULL,
                    channelRefId INTEGER REFERENCES channels(channelId)
                );
    `

    await pool.query(videoTableQuery);


}

createTables();
