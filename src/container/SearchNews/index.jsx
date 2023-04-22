import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import SearchBar from "../../components/news/SearchBar";
import newsFeedActions from "../../redux/newsFeed/actions";

const SearchNews = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const debounceSearch = useDebounce(searchText, 500);

  useEffect(() => {
    if (debounceSearch) {
      dispatch(newsFeedActions.getSearchSuggestion({ search: debounceSearch }));
    }
    return () => dispatch(newsFeedActions.removeSuggestions());
  }, [debounceSearch, dispatch]);

  const handleOnSearch = () => {
    if (!!searchText) {
      navigate(`/news?search=${searchText}&page=1`);
    }
  };

  return (
    <div className="search-news container">
      <h1>News Lister</h1>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleOnSearch={handleOnSearch}
      />
    </div>
  );
};

export default SearchNews;
