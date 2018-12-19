import React from "react";
import Paginate from "../components/Paginate";
import { mount } from "enzyme";
import usersFixture from "../fixtures/users";

describe("Paginate", () => {
  let User = () => <div />;
  let wrapper = mount(<Paginate items={usersFixture} Component={User} />);

  it("should have 26 User components", () => {
    expect(wrapper.find("User")).toHaveLength(26);
  });

  describe("no users context", () => {
    let wrapper = mount(<Paginate items={[]} Component={User} />);

    it("should display a loader if there are no users", () => {
      expect(wrapper.find("Loader")).toHaveLength(1);
    });
  });
});
