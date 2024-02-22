import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Movie from "../components/Movie";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getMovies = async () => {
    const json = await (await fetch(API_URL)).json();      
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {    
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map(movie => 
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image} 
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          )}
        </div>
      )}
    </div>    
  );
}
