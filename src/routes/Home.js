import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
  
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map(movie => 
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
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
