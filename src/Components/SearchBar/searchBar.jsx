import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.css";

function SearchBar() {
  const [keyWord, setKeyWord] = useState();
  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/search/${keyWord}`);
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-bar-input"
        type="text"
        onChange={function (event) {
          setKeyWord(event.target.value);
        }}
      />
      <button className="search-bar-button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
