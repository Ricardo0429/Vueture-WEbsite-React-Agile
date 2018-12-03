import React from "react";
import { mount } from "enzyme";
import { Navbar } from "../components/Navbar";
//import { DropdownMenu } from "../components/DropdownMenu";

// describe('DropdownMenu', () => {
//   const handleActiveItemMock = jest.fn();
//   const handleDropdownItemClickMock = jest.fn();
//   const props = {
//     handleActiveItem: handleActiveItemMock,
//     handleDropdownItemClick: handleDropdownItemClickMock,
//   };

//   const wrapper = shallow(<DropdownMenu {..props} />);
//   test('calls handleDropdownItemClickMock when handleActiveItemMock is called', () => {
//         wrapper.instance().handleActiveItem();

//     expect(handleActiveItemMock).toHaveBeenCalled();
//   })
// })

describe("Navbar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Navbar history={{ push: () => {} }} location={{ pathname: "/" }} />
    );
  });

  it("should have 9 menu items and one dropdown menu", () => {
    expect(wrapper.find("MenuItem")).toHaveLength(9);
    expect(wrapper.find("DropdownMenu")).toHaveLength(1);
  });

  it("calls handleClickItem when clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleItemClick");
    wrapper.instance().forceUpdate();
    const rootPath = wrapper.find("MenuItem").filterWhere(item => {
      return item.prop("name") === "/";
    });
    rootPath.simulate("click");

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("calls handleDropdownItemClick when events item is clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleDropdownItemClick");
    wrapper.instance().forceUpdate();
    const eventsPath = wrapper.find("DropdownItem").filterWhere(item => {
      return item.prop("name") === "events";
    });
    eventsPath.simulate("click");

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("calls handleDropdownItemClick when scrums is clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleDropdownItemClick");
    wrapper.instance().forceUpdate();
    const scrumsPath = wrapper.find("DropdownItem").filterWhere(item => {
      return item.prop("name") === "scrums";
    });
    scrumsPath.simulate("click");

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("calls handleDropdownItemClick when hangouts item is clicked", () => {
    const wrapper = mount(
      <Navbar history={{ push: () => {} }} location={{ pathname: "/hangouts" }} />
    );
    const spy = jest.spyOn(wrapper.instance(), "handleDropdownItemClick");
    wrapper.instance().forceUpdate();
    const hangoutsPath = wrapper.find("DropdownItem").filterWhere(item => {
      return item.prop("name") === "hangouts";
    });
    hangoutsPath.simulate("click");

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("calls handleActiveItem when new is clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleActiveItem");
    wrapper.instance().forceUpdate();
    wrapper.find("Dropdown").simulate("click");

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
