import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/header";
import GenrePage from "./Pages/GenrePage/genrePage";
import SearchPage from "./Pages/SearchPage/searchPage";
import MovieDetailPage from "./Pages/MovieDetailPage/movieDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search/:search" element={<SearchPage />} />
        <Route path="/pelicula/:movieId" element={<MovieDetailPage />} />
        <Route path="/genero/:genreName/:genreId" element={<GenrePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
