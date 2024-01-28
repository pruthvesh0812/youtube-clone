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
function createNewChannel(channel) {
    return __awaiter(this, void 0, void 0, function* () {
        const createUserChannelQuery = `
        INSERT INTO channels (channelName,channelSubscribers,channelProfilePhotoLink,userRefId) VALUES ($1,$2,$3,$4) RETURNING channelId;
    `;
        const channelId = yield dbConnect_1.pool.query(createUserChannelQuery, [channel.channelName, channel.channelSubscribers, channel.channelProfilePhotoLink, channel.userRefId]);
        return channelId;
    });
}
exports.default = createNewChannel;
