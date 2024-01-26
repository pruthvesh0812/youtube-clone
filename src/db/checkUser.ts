import getClient from "./utils"

export default async function checkUser(user:{email:string,password:string}){
    const client = await getClient();
    
    const getUserQuery = `
        SELECT userId FROM users WHERE email = ? and password = ?;
    `

    const userId = await client.query(getUserQuery,[user.email,user.password]);
    return userId;
}