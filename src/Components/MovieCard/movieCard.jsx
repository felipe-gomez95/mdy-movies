import { Link } from "react-router-dom";
import "./movieCard.css";

function MovieCard({ movie }) {
  return (
    <article className="movie-card-container">
      <Link className="movie-card-img-container" to={`/pelicula/${movie.id}`}>
        <img
          className="movie-card-img"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
        <span className="movie-card-rating">{movie.vote_average * 10}%</span>
      </Link>
      <Link className="movie-card-title" to={`/pelicula/${movie.id}`}>
        {movie.title}
      </Link>
      <p className="movie-card-date">{movie.release_date}</p>
    </article>
  );
}

export default MovieCard;
