import { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/movieCard";
import { apiKey } from "../../Utils/tmdbKey";
import "./home.css";

function Home() {
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  async function getMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=all&api_key=${apiKey}&language=en-US&page=${currentPage}&include_adult=false`
    );

    const data = await response.json();
    console.log(data);
    setMovies(data.results);
    setTotalPages(data.total_pages);
  }

  useEffect(getMovies, [currentPage]);

  return (
    <section className="">
      <section className="movie-cards-container">
        {movies?.map(function (movie) {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </section>
      <button
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
        onClick={function () {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        }}
        disabled={currentPage === totalPages}
      >
        siguiente
      </button>
    </section>
  );
}

export default Home;
