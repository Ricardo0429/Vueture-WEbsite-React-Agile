import React from "react";
import { shallow } from "enzyme";
import { ProjectsList } from "../components/ProjectsList";

describe("ProjectsList", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ProjectsList />);
  });

  it("has something", () => {
    console.log(wrapper.debug());
  });
})