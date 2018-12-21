import React from "react";
import { mount } from "enzyme";
import User from "../components/User";
import { StaticRouter } from "react-router";
import usersFixture from "../fixtures/users";

//mount User component
describe("User", () => {
  let wrapper;
  const context = {};
  let user = usersFixture[0];

  beforeEach(() => {
    wrapper = mount(
      <StaticRouter context={context}>
        <User user={user} />
      </StaticRouter>
    );
  });

  it("should have an Image with an image url", () => {
    expect(wrapper.find("Image").prop("src")).toEqual(user.image_url);
  });

  it("should use the default image if there is no image url", () => {
    const user = usersFixture[2];
    const wrapper = mount(
      <StaticRouter context={context}>
        <User user={user} />
      </StaticRouter>
    );
    expect(wrapper.find("Image").prop("src")).toEqual("fullLogo");
  });

  it("should have a CardHeader with the user's name", () => {
    expect(wrapper.find("CardHeader").text()).toEqual(user.first_name + user.last_name);
  });
});