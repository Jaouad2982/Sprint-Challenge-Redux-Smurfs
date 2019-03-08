/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {
  FETCHED_DATA,
  ADD_SMURF,
  DELETE_SMURF,
  ERROR,
  UPDATE_SMURF
} from "../actions";


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};


const rootReducer = (state = initialState,action)=>{

  switch (action.type) {
    case FETCHED_DATA:
      return {
        ...state,
        smurfs: action.payload
      };
    case ADD_SMURF:
      console.log(action.payload);
      return {
        ...state,
        smurfs: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }

}

export default rootReducer