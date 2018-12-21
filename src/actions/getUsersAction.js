import axios from "axios";
import { GET_USERS } from "../types";

export let getUsers = users => ({ type: GET_USERS, payload: users });

export let fetchUsers = () => dispatch => {
  return axios
    .get("https://develop.websiteone.agileventures.org/api/v1/users")
    .then(response => {
      let { users, gravatar_url, karma_total } = response.data;
      users = users.map(user => {
        user.gravatar_url = gravatar_url[user.id];
        user.karma_total = karma_total[user.id];
        return user;
      });
      dispatch(getUsers(users));
    });
};
