import { all } from "redux-saga/effects";
import newsFeedSaga from "./newsFeed/saga";

export default function* rootSaga() {
  yield all([newsFeedSaga()]);
}
