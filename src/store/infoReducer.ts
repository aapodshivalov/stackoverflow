interface InfoState {
  info: null | any;
  loading: boolean;
  error: null | string;
}

interface InfoAction {
  type: string;
  payload?: any;
  qid: string;
}
const initialState = {
  info: {},
  loading: false,
  error: null,
};

// actions
export const SET_INFO = 'SET_INFO';
export const SET_INFO_LOAD = 'SET_INFO_LOAD';
export const SET_INFO_ERROR = 'SET_INFO_ERROR';
export const FETCH_INFO = 'FETCH_INFO';

export default function infoReducer(state = initialState, action: InfoAction): InfoState {
  switch(action.type) { /* eslint-disable-line */
    case SET_INFO_LOAD:
      return { ...state, loading: true, error: null };
    case SET_INFO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_INFO:
      return { ...state, loading: false, info: { ...state.info, [action.qid]: action.payload } };
  }
  return state;
}

export const setInfo = ({ payload, qid }: any) => ({ type: SET_INFO, payload, qid });
export const setInfoLoad = (payload: boolean) => ({ type: SET_INFO_LOAD, payload });
export const setInfoError = (payload: any) => ({ type: SET_INFO_ERROR, payload });
export const fetchInfo = ({ qid }: any) => ({ type: FETCH_INFO, qid });
