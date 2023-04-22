import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "antd";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import newsFeedActions from "../../redux/newsFeed/actions";
import NewsCard from "./../../components/news/NewsCard";
import { useSelector } from "react-redux";
import {
  getLoading,
  getNewsFeed,
  getTotal,
} from "../../redux/newsFeed/selector";
import Loader from "./../../components/common/Loader";

const NewsFeed = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const newsData = useSelector(getNewsFeed);
  const loading = useSelector(getLoading);
  const total = useSelector(getTotal);
  const navigate = useNavigate();

  const getParams = useCallback(() => {
    const params = {};
    for (let [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [searchParams]);

  useEffect(() => {
    const updatedParams = getParams();
    dispatch(newsFeedActions.getNewsFeed(updatedParams));
  }, [dispatch, searchParams, getParams]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onChangePageHandler = (page) => {
    console.log("Page", page);
    const params = getParams();
    setSearchParams(createSearchParams({ ...params, page }));
    scrollToTop();
  };

  const pagination = (
    <Pagination
      current={+searchParams.get("page") || 1}
      onChange={onChangePageHandler}
      total={total}
      showSizeChanger={false}
    />
  );

  if (loading) return <Loader />;

  return (
    <div className="container">
      <div
        className="pagination-button go-back-btn"
        onClick={() => navigate("/")}
      >
        Go back
      </div>
      {pagination}
      <div className="cards-container">
        {!!newsData?.length ? (
          newsData.map((news) => {
            return <NewsCard news={news} />;
          })
        ) : (
          <div className="no-data-found">No data found</div>
        )}
      </div>
      {pagination}
    </div>
  );
};

export default NewsFeed;
