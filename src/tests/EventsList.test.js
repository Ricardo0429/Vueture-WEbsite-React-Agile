import React from "react";
import { shallow, mount } from "enzyme";
import { EventsList } from "../components/EventsList";
import eventsFixture from "../fixtures/events.js";

describe("EventsList", () => {
  let wrapper;
  let spy = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<EventsList events={[]} fetchEvents={spy} />);
  });

  it("should fetch events if none are in the store", () => {
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should render one BigCalendar component", () => {
    expect(wrapper.find(".big-calendar")).toHaveLength(1);
  });

  it("should save to localStorage", () => {
    wrapper = mount(<EventsList events={eventsFixture} />);
    const KEY = "events",
      VALUE = JSON.stringify(eventsFixture);
    wrapper.instance().forceUpdate();
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});
