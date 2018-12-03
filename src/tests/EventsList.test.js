import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import EventsList from "../components/EventsList";

describe("EventsList", () => {
  const mockStore = configureStore();
  const initialState = {}; 
  let wrapper;
  let store;
  
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<EventsList store={store}/>);
  });

  it("has something", () => {
    console.log(wrapper.debug());
  });
});
