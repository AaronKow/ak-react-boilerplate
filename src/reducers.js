// Modules
import {combineReducers} from "redux";

// Reducer
const list = (state = {
  data: [
    {value: 0}
  ],
  error: null
}, action) => {

  switch (action.type) {
    case "GET_LIST":
      {
        return {
          ...state,
          data: [...state.data, action.payload]
        }
      }
  }

  return state;
}

export default combineReducers({list});
