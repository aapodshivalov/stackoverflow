import { all, fork } from 'redux-saga/effects';
import { userWatcher } from './userSaga';
import { questionsWatcher } from './questionsSaga';
import { infoWatcher } from './infoSaga';

export function* rootWatcher() {
  yield all([
    fork(userWatcher),
    fork(questionsWatcher),
    fork(infoWatcher),
  ]);
}
