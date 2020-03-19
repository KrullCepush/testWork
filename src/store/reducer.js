import {
  COMPLITE_AUTH,
  ERROR_AUTH,
  AUTH_ACTION_START,
  AUTH_ACTION_END,
  LOG_OUT
} from "./types";

const initialState = {
  authStatus: false,
  errorAuth: {
    password: null,
    login: null
  },
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_OUT: {
      return {
        ...state,
        authStatus: false
      };
    }

    case COMPLITE_AUTH:
      return {
        ...state,
        authStatus: true
      };

    case AUTH_ACTION_START:
      return {
        ...state,
        loading: true
      };

    case AUTH_ACTION_END:
      return {
        ...state,
        loading: false
      };

    case ERROR_AUTH:
      return {
        ...state,
        errorAuth: action.payloadError
      };

    default:
      return { ...state };
  }
}
