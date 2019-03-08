/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";
export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHED_DATA = "FETCHED_DATA";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const ERROR = "ERROR";

export const getData = _ => dispatch => {
  dispatch({ type: FETCHING_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(({ data }) => dispatch({ type: FETCHED_DATA, payload: data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(({ data }) => dispatch({ type: ADD_SMURF, payload: data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(({ data }) => dispatch({ type: DELETE_SMURF, payload: data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const updateSmurf = (id, updates) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, updates)
    .then(({ data }) => dispatch({ type: UPDATE_SMURF, payload: data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};