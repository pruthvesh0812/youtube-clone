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
function uploadVideo(video) {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadVideoQuery = `
        INSERT INTO videos (videoTitle,videoDescription,likeCount,viewCount,publishedDate,thumbnailImageLink,videoLink,channelRefId) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING videoId;
    `;
        const videoId = yield dbConnect_1.pool.query(uploadVideoQuery, [video.videoTitle, video.videoDescription, video.likeCount, video.viewCount, video.publishedDate, video.thumbnailImageLink, video.videoLink, video.channelRefId]);
        return videoId;
    });
}
exports.default = uploadVideo;
