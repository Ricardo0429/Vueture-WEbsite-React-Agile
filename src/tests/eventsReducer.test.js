import eventsReducer from "../reducers/eventsReducer";
import { GET_EVENTS } from "../types";

describe("eventsReducer", () => {
  it("defaults to empty events if none are passed in", () => {
    expect(eventsReducer(undefined, {})).toEqual([]);
  });

  it("reduces events", () => {
    expect(
      eventsReducer([], {
        type: GET_EVENTS,
        payload: ["Event to be added to store"]
      })
    ).toEqual(["Event to be added to store"]);
  });
});
