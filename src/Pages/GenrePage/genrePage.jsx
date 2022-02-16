import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../Components/MovieCard/movieCard";
import { apiKey } from "../../Utils/tmdbKey";

function GenrePage() {
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const params = useParams();

  async function getMoviesByGenre() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${params.genreId}&page=${currentPage}`
    );

    const data = await response.json();
    setMovies(data.results);
    console.log(data);
    setTotalPages(data.total_pages);
  }

  useEffect(getMoviesByGenre, [currentPage, params.genreId]);

  return (
    <section>
      <h1 className="page-title">Peliculas de {params.genreName}</h1>
      <section className="movie-cards-container">
        {movies?.map(function (movie) {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </section>
      <div className="movie-cards-buttons-container">
        <button
          className="movie-cards-button"
          onClick={function () {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
          disabled={currentPage < 2}
        >
          anterior
        </button>
        <button
          className="movie-cards-button"
          onClick={function () {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
          disabled={currentPage === totalPages}
        >
          siguiente
        </button>
      </div>
    </section>
  );
}

export default GenrePage;
