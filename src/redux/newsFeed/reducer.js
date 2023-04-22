import newsFeedActions from "./actions";

const initState = {
  news: [],
  total: 0,
  loader: false,
  error: null,
  suggestions: [],
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case newsFeedActions.NEWS_FEED_REQEUST:
      return {
        ...state,
        loader: true,
      };
    case newsFeedActions.NEWS_FEED_SUCCESS:
      return {
        ...state,
        isLogin: true,
        news: action.data?.results,
        total: action.data?.total,
        loader: false,
      };
    case newsFeedActions.NEWS_FEED_ERROR:
      return {
        ...state,
        error: action.data,
        loader: false,
      };
    case newsFeedActions.SEARCH_SUGGESTION_REQEUST:
      return {
        ...state,
        loader: true,
      };
    case newsFeedActions.SEARCH_SUGGESTION_SUCCESS:
      return {
        ...state,
        isLogin: true,
        suggestions: action.data,
        loader: false,
      };
    case newsFeedActions.SEARCH_SUGGESTION_ERROR:
      return {
        ...state,
        error: action.data,
        loader: false,
      };
    case newsFeedActions.REMOVE_SUGGESTION:
      return {
        ...state,
        suggestions: [],
      };
    default:
      return state;
  }
}
