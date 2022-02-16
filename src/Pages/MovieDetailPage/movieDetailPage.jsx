import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../../Utils/tmdbKey";
import "./movieDetailPage.css";

function MovieDetailPage() {
  const params = useParams();
  const [movie, setMovie] = useState();

  async function getMovie() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey}&language=es`
    );

    const data = await response.json();

    setMovie(data);
  }

  useEffect(getMovie, []);

  return movie ? (
    <section className="movie-detail-container">
      <img
        className="movie-detail-backdrop"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt=""
      />
      <div className="movie-detail-content">
        <img
          className="movie-detail-poster"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt=""
        />
        <section className="movie-detail-description">
          <h1 className="movie-detail-title">{movie.title}</h1>
          <p>
            {movie.release_date} (
            {movie.production_countries.map(function (country) {
              return country.iso_3166_1;
            })}
            ) &#183;
            {movie.genres.map(function (genre) {
              return ` ${genre.name}`;
            })}{" "}
            &#183; {movie.runtime}min
          </p>
          <div className="movie-rating-container">
            <span className="movie-detail-rating">
              {movie.vote_average * 10}%
            </span>
            <span className="movie-rating-title">
              Puntuación de los usuarios
            </span>
          </div>
          <h2 className="movie-description-title">Sinopsis</h2>
          <p>{movie.overview}</p>
        </section>
      </div>
    </section>
  ) : null;
}

export default MovieDetailPage;
