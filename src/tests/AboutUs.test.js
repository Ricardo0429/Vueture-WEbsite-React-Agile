import React from "react";
import { shallow } from "enzyme";
import AboutUs from "../components/AboutUs";

describe("AboutUs", () => {
  it("should have a header with About Us title", () => {
    let wrapper = shallow(<AboutUs />);
    expect(wrapper.find(".App-intro").text()).toEqual("About Us");
  });
});
