"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = exports.client = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.pool = new pg_1.Pool({
    host: "batyr.db.elephantsql.com",
    port: 5432,
    user: "eaqngkws",
    password: "5c8dyAWHhjUln0XHz3-y0MVBDPhD_WDy",
    database: "eaqngkws",
    max: 10
});
// const POSTGRES_URL = process.env.POSTGRES_URL;
// console.log('POSTGRES_URL:', POSTGRES_URL); 
// export default async function getClient() {
//     console.log('POSTGRES_URL:', POSTGRES_URL); 
//         client = new Client(POSTGRES_URL)
//         await client.connect()
//         return client;
// }
// getClient().then((c)=>{
// console.log(client);
// }).catch(err=>{console.log(err,"error")});
// either put server files in a different folder , and there use {Pool} from 'pg', so that 
//we have a persistent connection
//or use a different database
// or use Prisma orm
