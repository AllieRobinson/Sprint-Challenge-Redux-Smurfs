import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_DATA = "FETCHING_DATA"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"

export const ADDING_SMURF = "ADDING_SMURF"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL"

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

export const addSmurf = (smurf) => dispatch => {
  dispatch({
    type: ADDING_SMURF
  })
  axios
  .post('http://localhost:3333/smurfs', {
    name: '',
    age: '',
    height: ''
  })
  .then(response => {
    dispatch({
      type: ADD_SMURF_SUCCESS,
      payload: smurf
    })
  })
  .catch( err => {
    console.log("err", err)
    dispatch({
      type: ADD_SMURF_FAIL
    })
  })
}

export const getSmurfs = () => dispatch => {
  dispatch({
    type: FETCHING_DATA
  })
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
    dispatch({
      type: FETCH_SUCCESS,
      payload: response.data.results
    })
  })
  .catch((err) => {
    console.log("err", err)
    dispatch({
      type: FETCH_FAIL
    })
  })
}