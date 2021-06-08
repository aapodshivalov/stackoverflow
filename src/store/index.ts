import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './userReducer';
import infoReducer from './infoReducer';
import questionsReducer from './questionsReducer';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  userReducer,
  infoReducer,
  questionsReducer,
});

export const composeEnhancers = (window
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootWatcher);
