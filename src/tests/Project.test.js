import React from "react";
import { mount } from "enzyme";
import Project from "../components/Project";
import { StaticRouter } from "react-router";
import projectsFixture from "../fixtures/projects";
import fullLogo from "../images/full_logo2_agile_ventures.png";

//mount Project component
describe("Project", () => {
  let wrapper;
  const context = {};
  let project = projectsFixture[0];

  beforeEach(() => {
    wrapper = mount(
      <StaticRouter context={context}>
        <Project project={project} />
      </StaticRouter>
    );
  });

  it("should have an Image with an image url", () => {
    expect(wrapper.find("Image").prop("src")).toEqual(project.image_url);
  });

  it("should use the default image if there is no image url", () => {
    const project = projectsFixture[2];
    const wrapper = mount(
      <StaticRouter context={context}>
        <Project project={project} />
      </StaticRouter>
    );
    expect(wrapper.find("Image").prop("src")).toEqual(fullLogo);
  });

  it("should have a CardHeader with the project's title", () => {
    expect(wrapper.find("CardHeader").text()).toEqual(project.title);
  });
});
