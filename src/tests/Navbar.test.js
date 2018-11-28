import React from "react";
import { mount } from "enzyme";
import { Navbar } from "../components/Navbar";
import { Menu } from "semantic-ui-react";

describe("Navbar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Navbar location={{ pathname: "/" }} />);
  });

  it("should have 5 menu items and one dropdown menu", () => {
    //expect(wrapper.find('div')).toBe(1);
    expect(wrapper.find(Menu)).toBe(6);
    //expect(wrapper).find('MenuItem').toBe(5);
    // expect(wrapper).find('DropdownMenu').toBe(1);
  });
});
