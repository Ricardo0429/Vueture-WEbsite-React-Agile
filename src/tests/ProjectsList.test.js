import React from "react";
import { mount } from "enzyme";
import { ProjectsList } from "../containers/ProjectsList";

describe("ProjectsList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ProjectsList projects={[]} fetchProjects={() => {}} />);
  });

  it("should have 1 card group", () => {
    expect(wrapper.find("CardGroup")).toHaveLength(1);
  });
});
