import { useNavigate, Link, useParams } from 'react-router-dom';
import { getMovieURL } from '../constants';
import { useEffect, useState } from 'react';
import MovieDetails from '../components/MovieDetails';

export default function Detail() {  
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  async function fetchMovie(id) {
    const MOVIE_URL = getMovieURL(id);
    const json = await (await fetch(MOVIE_URL)).json();    
    setMovie(json.data.movie);
    setLoading(false);
  }

  const onClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchMovie(id);
  }, [id]);
  
  return (    
    <div>
      <button onClick={onClick}>&larr; Back to the home</button>
      
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <MovieDetails          
          coverImg={movie.large_cover_image}
          title={movie.title}
          description={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}