import { all, takeEvery, put, fork } from "redux-saga/effects";
import newsFeedActions from "./actions";

import { getNewsFeed } from "../../services/newsFeed";
import { getSearchSuggestions } from "../../services/searchSuggestions";

export function* newsFeedRequest() {
  yield takeEvery(newsFeedActions.NEWS_FEED_REQEUST, function* ({ data }) {
    try {
      let { response } = yield getNewsFeed(data);

      if (response.status === "ok" || response.status === 200) {
        yield put({
          type: newsFeedActions.NEWS_FEED_SUCCESS,
          data: response,
        });
      } else {
        throw response;
      }
    } catch (e) {
      yield put({
        type: newsFeedActions.NEWS_FEED_ERROR,
      });
    }
  });
}

export function* searchSuggestionRequest() {
  yield takeEvery(
    newsFeedActions.SEARCH_SUGGESTION_REQEUST,
    function* ({ data }) {
      try {
        let { response } = yield getSearchSuggestions(data);

        if (response.status === "ok" || response.status === 200) {
          yield put({
            type: newsFeedActions.SEARCH_SUGGESTION_SUCCESS,
            data: response.results,
          });
        } else {
          throw response;
        }
      } catch (e) {
        yield put({
          type: newsFeedActions.SEARCH_SUGGESTION_ERROR,
        });
      }
    }
  );
}

export default function* authSagas() {
  yield all([fork(newsFeedRequest), fork(searchSuggestionRequest)]);
}
