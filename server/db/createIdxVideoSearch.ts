import { pool } from "./dbConnect";

export default async function createIndexForVideoSearch(){

    const createIndex = `
        CREATE INDEX idx_title_fts ON videos USING gin(to_tsvector('english', videoTitle));
    `

    await pool.query(createIndex)
    
}

createIndexForVideoSearch();