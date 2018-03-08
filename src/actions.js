// Modules
// import axios from "axios";


export function getData(data) {
    return dispatch => {
      dispatch({
          type: "GET_LIST",
          payload: data
      });

      return true;
    }
}
