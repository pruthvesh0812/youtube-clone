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
//always remember name of the file and inside function name
// should be same, otherwise you get an error
function checkUserJoinChannel(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const getUserChannelJoinQuery = `
        SELECT (userId,channelId) FROM users JOIN channels ON users.userId = channels.userRefId WHERE userId = $1;
    `;
        const result = yield dbConnect_1.pool.query(getUserChannelJoinQuery, [userId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result;
    });
}
exports.default = checkUserJoinChannel;
