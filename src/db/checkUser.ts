import getClient from './dbConnect'

export default async function checkUser(user: { email: string, password: string }) {
    const client = await getClient();
    console.log(user.email)
    const getUserQuery = `
        SELECT userId FROM users WHERE email = $1 and password = $2;
    `

    const userId = await client.query(getUserQuery, [user.email, user.password]);
    console.log(userId)
    if(userId.rowCount == 0){
        return null;
    }
    await client.end()

    return userId;
}