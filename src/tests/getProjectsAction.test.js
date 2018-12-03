import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { fetchProjects } from "../actions/getProjectsAction";
import { GET_PROJECTS } from "../types";
import projectsResponse from "../fixtures/projects.js";

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

  it("fetches projects from external api", () => {
    const expectedActions = [{ type: GET_PROJECTS, payload: projectsResponse }];
    moxios.stubRequest(
      "https://develop.websiteone.agileventures.org/api/v1/projects",
      {
        status: 200,
        response: projectsResponse
      }
    );

    return store.dispatch(fetchProjects()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
