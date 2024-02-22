export const API_URL = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.3&with_rt_ratings=true&sort_by=year&limit=50`;
export function getMovieURL(id) {
  return `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
}
