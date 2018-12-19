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

  it("should have links for each page", () => {
    expect(wrapper.find("span")).toHaveLength(2);
  });
      
  it("should be active when on selected page", () => {
    let page2 = wrapper.find("span").filterWhere(item => {
      return item.text() === "2";
    });
    let activePage = wrapper.find("span").filterWhere(item => {
      return item.hasClass("active");
    });
    expect(page2).toEqual(activePage);
  });
});
