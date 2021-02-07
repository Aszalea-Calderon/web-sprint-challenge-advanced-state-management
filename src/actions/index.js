import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const SMURF_RETRIEVED = "SMURF_RETRIEVED";
export const FETCH_FAILED = "FETCH_FAILED";
export const CLEAR_ERROR = "CLEAR_ERROR";
//export const ADD_SMURF = "ADD_SMURF";
//export const SET_ERROR = "SET_ERROR";

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: START_FETCHING });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data, "res.data");
      dispatch({ type: SMURF_RETRIEVED, payload: res.data });
    })
    .catch((err) => {
      console.error("Error getting a Smurf from API:", err);
      dispatch({ type: FETCH_FAILED, payload: err.message });
    });
};

export const addSmurf = (newSmurfInfo) => {
  return { type: SMURF_RETRIEVED, payload: newSmurfInfo };
};

export const setError = (errorMessage) => {
  return { type: CLEAR_ERROR, payload: errorMessage };
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem necessary to complete application.
