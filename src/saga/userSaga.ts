import { put, takeEvery, call } from 'redux-saga/effects';
import {
  FETCH_USERS,
  setUsers,
  setUsersText,
  setUsersLoad,
  setUsersError,
} from '../store/userReducer';

const url = (q: string) => `https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=${encodeURIComponent(q)}&site=stackoverflow`;
const fetchUsersFromApi = async (q: string) => fetch(url(q))
  .then((response) => response.json())
  .then((data) => data);

function* fetchUserWorker(action: any): any {
  yield put(setUsersText(action.q));
  yield put(setUsersLoad(true));
  const result = yield call(fetchUsersFromApi, action.q);
  /* eslint-disable camelcase */
  const {
    items,
    error_id,
    error_message,
    error_name,
  } = result;
  const error = { error_id, error_message, error_name };
  if (items) {
    yield put(setUsers(items));
  } else {
    yield put(setUsersError(error));
  }
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}
