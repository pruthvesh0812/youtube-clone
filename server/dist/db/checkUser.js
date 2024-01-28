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
function checkUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(dbConnect_1.pool, "pool");
        console.log(user.email);
        const getUserQuery = `
        SELECT userId FROM users WHERE email = $1 and password = $2;
    `;
        const userId = yield dbConnect_1.pool.query(getUserQuery, [user.email, user.password]);
        console.log(userId);
        if (userId.rowCount == 0) {
            return null;
        }
        return userId;
    });
}
exports.default = checkUser;
