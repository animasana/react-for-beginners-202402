import PropTypes from 'prop-types';

export default function MovieDetails({ coverImg, title, description, genres }) {
  return (
    <div>      
      <h1>{title}</h1>
      <img src={coverImg} alt={title}/>
      <p>{description.substr(0, 300)}...</p>
      <ul>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>      
    </div>
  );
}

MovieDetails.propTypes = {  
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}