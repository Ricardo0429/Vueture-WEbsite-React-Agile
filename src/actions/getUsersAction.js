import axios from "axios";
import { GET_USERS } from "../types";

export let getUsers = users => ({ type: GET_USERS, payload: users });

export let fetchUsers = () => dispatch => {
  return axios
    .get("https://develop.websiteone.agileventures.org/api/v1/users")
    .then(response => {
      let {
        users,
        gravatar_url,
        karma_total,
        users_bio,
        users_skills,
        users_projects,
        users_contributions,
        users_videos,
        users_commit_count_total,
        users_hangouts,
        users_authentications,
        users_profile,
        users_membership_length,
        users_activity
      } = response.data;
      users = users.map(user => {
        user.gravatar_url = gravatar_url[user.id];
        user.karma_total = karma_total[user.id];
        user.bio = users_bio[user.id];
        user.skill_list = users_skills[user.id];
        user.projects = users_projects[user.id];
        user.contributions = users_contributions[user.id];
        user.videos = users_videos[user.id];
        user.commit_count_total = users_commit_count_total[user.id];
        user.hangouts = users_hangouts[user.id];
        user.authentications = users_authentications[user.id];
        user.profile = users_profile[user.id];
        user.membership_length = users_membership_length[user.id];
        user.activity = users_activity[user.id];
        return user;
      });
      dispatch(getUsers(users));
    });
};
