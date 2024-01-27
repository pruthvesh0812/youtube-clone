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
exports.client = void 0;
const pg_1 = require("pg");
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        exports.client = new pg_1.Client("postgres://eaqngkws:5c8dyAWHhjUln0XHz3-y0MVBDPhD_WDy@batyr.db.elephantsql.com/eaqngkws");
        yield exports.client.connect();
        return exports.client;
    });
}
exports.default = getClient;
getClient().then((c) => {
    console.log(exports.client);
}).catch(err => { console.log(err); });
// either put server files in a different folder , and there use {Pool} from 'pg', so that 
//we have a persistent connection
//or use a different database
// or use Prisma orm
