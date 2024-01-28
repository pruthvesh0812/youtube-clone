import { pool } from "./dbConnect";
type userId = {
    userId:number
}

                                
export default async function checkUserJoinChannel(userId:number){

    const getUserChannelJoinQuery = `
        SELECT (userId,channelId) FROM users JOIN channels ON users.userId = channels.userRefId WHERE userId = $1;
    `
 
    const result = await pool.query(getUserChannelJoinQuery,[userId])
   
    if(result.rowCount == 0){
        return null;
    }
    return result;
}