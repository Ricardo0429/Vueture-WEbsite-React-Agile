import eventsReducer from "./eventsReducer";
import { getEvents } from "../actions/getEventsAction";

describe("eventsReducer", () => {
  it("defaults to empty events if none are passed in", () => {
    expect(eventsReducer(undefined, {})).toEqual({ events: [] });
  });

  it("reduces events", () => {
    const events = [{ title: "Testing events reducer" }];
    expect(eventsReducer(({ events: [] }), getEvents(events))).toEqual({
      events
    });
  });
});
