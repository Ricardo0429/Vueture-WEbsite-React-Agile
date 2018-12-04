import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { fetchEvents } from "../actions/getEventsAction";
import { GET_EVENTS } from "../types";
import eventResponse from "../fixtures/events.js";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;

describe("async actions", () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("responds with a list of events", () => {
    const expectedActions = [{ type: GET_EVENTS, payload: eventResponse }];
    moxios.stubRequest("https://www.agileventures.org/events.json", {
      status: 200,
      response: eventResponse
    });
    return store.dispatch(fetchEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
