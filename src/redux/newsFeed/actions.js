const newsFeedActions = {
  NEWS_FEED_REQEUST: "NEWS_FEED_REQEUST",
  NEWS_FEED_SUCCESS: "NEWS_FEED_SUCCESS",
  NEWS_FEED_ERROR: "NEWS_FEED_ERROR",
  SEARCH_SUGGESTION_REQEUST: "SEARCH_SUGGESTION_REQEUST",
  SEARCH_SUGGESTION_SUCCESS: "SEARCH_SUGGESTION_SUCCESS",
  SEARCH_SUGGESTION_ERROR: "SEARCH_SUGGESTION_ERROR",
  REMOVE_SUGGESTION: "REMOVE_SUGGESTION",

  getNewsFeed: (data) => {
    return {
      type: newsFeedActions.NEWS_FEED_REQEUST,
      data,
    };
  },

  getSearchSuggestion: (data) => {
    return {
      type: newsFeedActions.SEARCH_SUGGESTION_REQEUST,
      data,
    };
  },

  removeSuggestions: () => {
    return {
      type: newsFeedActions.REMOVE_SUGGESTION
    };
  },

};

export default newsFeedActions;
