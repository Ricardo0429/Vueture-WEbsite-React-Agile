import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { fetchUsers } from "../actions/getUsersAction";
import { GET_USERS } from "../types";
import usersResponse from "../fixtures/users";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe("fetchProjects action", () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("fetches users from an external api", () => {
    const expectedActions = [{ type: GET_USERS, payload: usersResponse }];
    moxios.stubRequest(
      "https://develop.websiteone.agileventures.org/api/v1/users",
      {
        status: 200,
        response: usersResponse
      }
    );

    return store.dispatch(fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});