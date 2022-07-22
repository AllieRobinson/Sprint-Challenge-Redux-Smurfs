/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_DATA, FETCH_SUCCESS, FETCH_FAIL, ADDING_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from '../actions'


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
    return {
      ...state,
      fetchingSmurfs: true
    }
    case FETCH_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    }
    case FETCH_FAIL:
      return {
        ...state,
        error: true
      }
    case ADDING_SMURF: 
      return {
        ...state,
        addingSmurf: true
      }
      case ADD_SMURF_SUCCESS:
        return {
          ...state,
          addingSmurf: false,
          smurfs: [...action.payload]
        }
        case ADD_SMURF_FAIL:
          return {
            ...state,
            error: true
          }
          default:
            return state;
  }
}
