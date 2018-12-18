import React from "react";
import { shallow, mount } from "enzyme";
import EventsList from "../components/EventsList";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import eventsFixture from "../fixtures/events.js";

describe("EventsList", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    events: eventsFixture
  };
  const store = mockStore(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EventsList store={store} />).dive();
  });

  it("should render one BigCalendar component", () => {
    expect(wrapper.find(".big-calendar")).toHaveLength(1);
  });

  it("should save to localStorage", () => {
    wrapper = mount(<EventsList store={store} />);
    const KEY = "events",
      VALUE = JSON.stringify(eventsFixture);
    wrapper.instance().forceUpdate();
    wrapper.update();
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});
