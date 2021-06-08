interface QuestionsState {
  questions: null | any[];
  loading: boolean;
  error: null | string;
  type: null | string;
}

interface QuestionsAction {
  type: string;
  payload?: any;
}

const initialState = {
  questions: null,
  loading: false,
  error: null,
  type: null,
};

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_QUESTIONS_ERROR = 'SET_QUESTIONS_ERROR';
export const SET_QUESTIONS_LOAD = 'SET_QUESTIONS_LOAD';
export const SET_QUESTIONS_TYPE = 'SET_QUESTIONS_TYPE';
export const SET_QUESTIONS_RESET = 'SET_QUESTIONS_RESET';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

export default function questionsReducer(state = initialState, action: QuestionsAction): QuestionsState {
  switch(action.type) { /* eslint-disable-line */
    case SET_QUESTIONS_LOAD:
      return { ...state, loading: true, error: null };
    case SET_QUESTIONS_TYPE:
      return { ...state, type: action.payload };
    case SET_QUESTIONS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_QUESTIONS:
      return { ...state, loading: false, questions: action.payload };
    case SET_QUESTIONS_RESET:
      return { ...initialState };
  }
  return state;
}

export const setQuestions = (payload: any) => ({ type: SET_QUESTIONS, payload });
export const setQuestionsError = (payload: any) => ({ type: SET_QUESTIONS_ERROR, payload });
export const setQuestionsLoad = (payload: boolean) => ({ type: SET_QUESTIONS_LOAD, payload });
export const setQuestionsType = (payload: string) => ({ type: SET_QUESTIONS_TYPE, payload });
export const setQuestionsReset = () => ({ type: SET_QUESTIONS_RESET });
export const fetchQuestions = ({ value, typeUrl }: any) => ({ type: FETCH_QUESTIONS, value, typeUrl });
