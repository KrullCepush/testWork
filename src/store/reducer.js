import { COMPLITE_AUTH, ERROR_AUTH } from "./types";

const initialState = {
  authStatus: false,
  errorType: null,
  errorText: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "COMPLITE_AUTH":
      return {
        ...state,
        authStatus: true
      };

    case "ERROR_AUTH":
      return {
        ...state,
        errorType: action.payloadError,
        errorText: action.payloadData
      };

    default:
      return { ...state };
  }
}
