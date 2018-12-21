import React from "react";
import PaginationLinks from "../components/PaginationLinks";
import { mount } from "enzyme";

describe("PaginationLinks", () => {
  let handlePageSelect = jest.fn();
  let wrapper = mount(
    <PaginationLinks
      handlePageSelect={handlePageSelect}
      pageCount={2}
      selectedPage={2}
    />
  );

  it("should have links each page, next, and previous", () => {
    expect(wrapper.find("span")).toHaveLength(4);
  });
      
  it("should be active when on selected page", () => {
    let activePage = wrapper.find("span").filterWhere(item => {
      return item.hasClass("active");
    });
    expect(activePage.text()).toEqual("2");
  });
});
