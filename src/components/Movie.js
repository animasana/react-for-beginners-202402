import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>      
      <h1><Link to={`/movie/${id}`}>{title}</Link></h1>
      <Link to={`/movie/${id}`}><img src={coverImg} alt={title}/></Link>
      <p>{summary?.substr(0, 300)}...</p>
      <ul>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>      
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}