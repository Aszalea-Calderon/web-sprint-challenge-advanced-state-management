import {
  START_FETCHING,
  SMURF_RETRIEVED,
  FETCH_FAILED,
  CLEAR_ERROR,
} from "../actions/index";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERROR:
      return { ...state, error: "" };
    case START_FETCHING:
      return { ...state, isFetching: true, error: "" };
    case SMURF_RETRIEVED: {
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };
    }
    case FETCH_FAILED: {
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    }
    default:
      return { ...state };
  }
};

//Task List:
// //
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as parameters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary

////
