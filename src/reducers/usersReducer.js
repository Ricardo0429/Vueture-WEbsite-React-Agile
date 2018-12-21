import { GET_USERS } from "../types";
import initialState from "./initialState";

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case GET_USERS:
      return [ ...action.payload ];
    default:
      return state;
  }
};

export default usersReducer;