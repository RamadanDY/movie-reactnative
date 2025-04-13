// TMDB = THE MOVIE DATA DATABASE 
 
export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    Headers: {
        accept: "application/json",
        Authorization: `Bearer ${ process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }

}

// function to fetch the movies data 
export const fetchMovies = async ({query}: {query: string }) => {
    const endpoint = query 
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.Headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);

     }

    const data = await response.json();

    return data.results;
}







// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDAwODZkZDVkZTk2MGM4N2JhMjQxZWE4NmIzNTZmNCIsIm5iZiI6MTc0MzcxNzc5OS40MDUsInN1YiI6IjY3ZWYwNWE3YTkzMTNjNzE4NGFjZThmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FGABK8_U7XPtakQz4jeURMFyhCR3O9P8dvRKDBPgWYw'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));