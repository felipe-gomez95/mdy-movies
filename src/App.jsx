import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/home";
import MovieDetailPage from "./Pages/MovieDetailPage/movieDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:movieId" element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
