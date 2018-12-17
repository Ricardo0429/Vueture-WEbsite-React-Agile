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
        <ProjectsList
          projects={projectsFixture}
          fetchProjects={() =>
            new Promise(function(resolve, _) {
              setTimeout(function() {
                resolve("promise");
              }, 300);
            })
          }
        />
      </StaticRouter>
    );
  });

  it("should have 1 card group and 1 PaginateProjects component", () => {
    expect(wrapper.find("CardGroup")).toHaveLength(1);
    expect(wrapper.find("PaginateProjects")).toHaveLength(1);
  });
});
