import { put, takeEvery, call } from 'redux-saga/effects';
import {
  FETCH_INFO,
  setInfo,
  setInfoLoad,
  setInfoError,
} from '../store/infoReducer';

const url = (qid: string) => `https://api.stackexchange.com/2.2/questions/${qid}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`;

const fetchInfoFromApi = async (qid: string) => fetch(url(qid))
  .then((response) => response.json())
  .then((data) => data);

function* fetchInfoWorker(action: any): any {
  yield put(setInfoLoad(true));
  const result = yield call(fetchInfoFromApi, action.qid);
  /* eslint-disable camelcase */
  const {
    items,
    error_id,
    error_message,
    error_name,
  } = result;
  const error = { error_id, error_message, error_name };
  if (items) {
    yield put(setInfo({ payload: items, qid: action.qid }));
  } else {
    yield put(setInfoError(error));
  }
}

export function* infoWatcher() {
  yield takeEvery(FETCH_INFO, fetchInfoWorker);
}
