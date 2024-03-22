"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnect_1 = require("./dbConnect");
function createTables() {
    return __awaiter(this, void 0, void 0, function* () {
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
    `;
        yield dbConnect_1.pool.query(videoTableQuery);
    });
}
exports.default = createTables;
createTables();
