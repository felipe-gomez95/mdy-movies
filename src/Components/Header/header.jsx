import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/mdy-logo.jpg";
import { apiKey } from "../../Utils/tmdbKey";
import SearchBar from "../SearchBar/searchBar";
import "./header.css";

function Header() {
  const [genres, setGenres] = useState();
  const [menuActive, setMenuActive] = useState(false);

  async function getGenres() {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es`
    );

    const data = await response.json();
    setGenres(data.genres);
  }

  useEffect(getGenres, []);

  return (
    <header className="header-container">
      <button
        onClick={function () {
          setMenuActive(true);
        }}
        className="menu-trigger"
      >
        <i className="fas fa-bars"></i>
      </button>
      <nav className={`header-menu ${menuActive ? "header-menu--active" : ""}`}>
        <button
          onClick={function () {
            setMenuActive(false);
          }}
          className="header-menu-close"
        >
          x
        </button>
        {genres?.map(function (genre) {
          return (
            <Link
              key={genre.id}
              className="header-menu-item"
              to={`/genero/${genre.name}/${genre.id}`}
            >
              {genre.name}
            </Link>
          );
        })}
      </nav>
      <SearchBar />
      <Link to="/">
        <img className="header-logo" src={logo} alt="" />
      </Link>
    </header>
  );
}

export default Header;
