import axios from "axios";
import { GET_USERS } from "../types";

export let getUsers = users => ({ type: GET_USERS, payload: users });

export let fetchUsers = () => dispatch => {
  return axios.get("https://develop.websiteone.agileventures.org/api/v1/users").then(response => {
    dispatch(getUsers(response.data));
  });
};
