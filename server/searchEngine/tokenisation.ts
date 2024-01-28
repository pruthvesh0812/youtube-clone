// Not using this
// using postgres's builtin index data structure and to_tsvector()

// import * as natural from 'natural';

// const tokenizer = new natural.WordTokenizer();

// // Sample video titles
// const videoTitles: string[] = [
//   'Introduction to JavaScript',
//   'Node.js Tutorial for Beginners',
//   'JavaScript Promises Explained',
// ];

// // Function to preprocess and tokenize text
// function tokenize(text: string): string[] | null {

//   return tokenizer.tokenize(text.toLowerCase());
// }

// // Create a TF-IDF instance
// const tfidf = new natural.TfIdf();

// // Add documents (video titles) to the TF-IDF model
// videoTitles.forEach((title, index) => {
//   const tokens = tokenize(title);
//   if(tokens){
//       tfidf.addDocument(tokens, title);
//   }
// });

// // Calculate TF-IDF for a new query
// const query = 'JavaScript Basics';
// const queryTokens = tokenize(query);

// // Get TF-IDF scores for the query
// const tfidfScores = tfidf.listTerms(0).map((term) => term.term);

// console.log('Query TF-IDF Scores:', tfidfScores);
