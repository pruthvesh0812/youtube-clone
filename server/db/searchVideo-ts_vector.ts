import { pool } from "./dbConnect";

export default async function searchVideo(keyword:string){
    const searchVideoQuery = `
        SELECT * FROM videos WHERE to_tsvector('english', videoTitle) @@ to_tsquery($1);
    `

    const matched_videos = pool.query(searchVideoQuery,[keyword]);
    return matched_videos;
}
// In the above code:

// to_tsvector('english', title) converts the title column into a tsvector, which is a document representation suitable for full-text search.
// to_tsquery('your_search_word') converts the search term into a tsquery, which is the query representation suitable for full-text search.
// @@ is the full-text search match operator, and the query checks if the tsvector generated from the title matches the tsquery generated from the search term.

