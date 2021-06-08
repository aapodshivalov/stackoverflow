import { put, takeEvery, call } from 'redux-saga/effects';
import {
  FETCH_QUESTIONS,
  setQuestions,
  setQuestionsLoad,
  setQuestionsError,
  setQuestionsType,
} from '../store/questionsReducer';

const url = (value: string, typeUrl: string) => {
  if (typeUrl === 'tags') {
    return `https://api.stackexchange.com/2.2/tags/${value}/faq?site=stackoverflow`;
  }
  // ids
  return `https://api.stackexchange.com/2.2/users/${value}/questions?order=desc&sort=activity&site=stackoverflow`;
};
const fetchQuestionsFromApi = async (value: string, typeUrl: string) => fetch(url(value, typeUrl))
  .then((response) => response.json())
  .then((data) => data);

function* fetchQuestionsWorker(action: any): any {
  yield put(setQuestionsLoad(true));
  yield put(setQuestionsType(action.typeUrl)); // log
  const result = yield call(fetchQuestionsFromApi, action.value, action.typeUrl);
  /* eslint-disable camelcase */
  const {
    items,
    error_id,
    error_message,
    error_name,
  } = result;
  const error = { error_id, error_message, error_name };
  if (items) {
    yield put(setQuestions(items));
  } else {
    yield put(setQuestionsError(error));
  }
}

export function* questionsWatcher() {
  yield takeEvery(FETCH_QUESTIONS, fetchQuestionsWorker);
}
