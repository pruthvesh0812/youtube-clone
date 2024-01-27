
import { client } from './dbConnect';

export default async function createNewUser(user: { email: string, password: string }) {
    
    const createUserQuery = `
        INSERT INTO users (email,password) VALUES ($1,$2) RETURNING userId;
    `
    const userId = await client.query(createUserQuery, [user.email, user.password]);
    
    return userId;

}