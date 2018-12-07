import React from "react";
import { mount } from "enzyme";
import { ProjectsList } from "../containers/ProjectsList";
import projectsFixture from "../fixtures/projects";
import { StaticRouter } from "react-router";

describe("ProjectsList", () => {
  let wrapper;
  const context = {};

  beforeEach(() => {
    wrapper = mount(
      <StaticRouter context={context}>
        <ProjectsList projects={projectsFixture} fetchProjects={() => {}} />
      </StaticRouter>
    );
  });

  it("should have 1 card group and 3 cards", () => {
    expect(wrapper.find("CardGroup")).toHaveLength(1);
    expect(wrapper.find("Card")).toHaveLength(3);
  });
  
  it("should have 3 Project components", () => {
    expect(wrapper.find("Project")).toHaveLength(3);
  });
  
  it("shouldn't render a Project component without projects", () => {
    const wrapper = mount(
      <StaticRouter context={context}>
        <ProjectsList projects={[]} fetchProjects={() => {}} />
      </StaticRouter>
    );
    expect(wrapper.find("Project")).toHaveLength(0);
  });
});
