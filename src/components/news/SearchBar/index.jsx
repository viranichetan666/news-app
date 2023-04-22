import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import newsFeedActions from "../../../redux/newsFeed/actions";
import { getSuggestion } from "../../../redux/newsFeed/selector";

function SearchBar({ searchText, setSearchText, handleOnSearch }) {
  const options = useSelector(getSuggestion)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOptionClick = (option) => {
    navigate(`/news?search=${option}&page=1`);
    dispatch(newsFeedActions.removeSuggestions())
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-contain">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        {options.length > 0 && (
          <ul className="search-options">
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option.webTitle)}
                className="search-option"
              >
                {option.webTitle}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button type="submit" className="search-button" onClick={handleOnSearch}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
