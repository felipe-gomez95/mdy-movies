import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../Components/MovieCard/movieCard";
import { apiKey } from "../../Utils/tmdbKey";

function SearchPage() {
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const params = useParams();

  async function getMovies() {
    let query = "all";

    if (params?.search) query = params.search;

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}&language=es&page=${currentPage}&include_adult=false`
    );

    const data = await response.json();
    setMovies(data.results);
    setTotalPages(data.total_pages);
  }

  useEffect(getMovies, [currentPage, params]);

  return (
    <section className="">
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

export default SearchPage;
