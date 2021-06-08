interface UserState {
  users: null | any[];
  loading: boolean;
  error: null | string;
  text: string;
}

interface UserAction {
  type: string;
  payload?: any;
}

const initialState: UserState = {
  users: null,
  loading: false,
  error: null,
  text: '',
};

export const SET_USERS = 'SET_USERS';
export const SET_USERS_TEXT = 'SET_USERS_TEXT';
export const SET_USERS_LOAD = 'SET_USERS_LOAD';
export const SET_USERS_ERROR = 'SET_USERS_ERROR';
export const FETCH_USERS = 'FETCH_USERS';

export default function userReducer(state = initialState, action: UserAction): UserState {
  switch(action.type) { /* eslint-disable-line */
    case SET_USERS_TEXT:
      return {
        ...state, loading: false, error: null, text: action.payload,
      };
    case SET_USERS_LOAD:
      return { ...state, loading: true, error: null };
    case SET_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_USERS:
      return { ...state, loading: false, users: action.payload };
  }
  return state;
}

export const setUsers = (payload: any) => ({ type: SET_USERS, payload });
export const setUsersText = (payload: string) => ({ type: SET_USERS_TEXT, payload });
export const setUsersLoad = (payload: boolean) => ({ type: SET_USERS_LOAD, payload });
export const setUsersError = (payload: any) => ({ type: SET_USERS_ERROR, payload });
export const fetchUsers = ({ q }: any) => ({ type: FETCH_USERS, q });
