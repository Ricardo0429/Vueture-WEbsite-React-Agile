import React from "react";
import { mount } from "enzyme";
import { UsersList } from "../containers/UsersList";
import usersFixture from "../fixtures/users";
import { StaticRouter } from "react-router";

describe("UsersList", () => {
  let wrapper;
  const context = {};

  wrapper = mount(
    <StaticRouter context={context}>
      <UsersList
        users={usersFixture}
        fetchUsers={() =>
          new Promise(function(resolve, _) {
            setTimeout(function() {
              resolve("promise");
            }, 300);
          })
        }
      />
    </StaticRouter>
  );

  it("should have a header Volunteers Directory", () => {
    expect(wrapper.find("Header").text()).toBe("Volunteers Directory");
  });

  it("should have a Paginate component", () => {
    expect(wrapper.find("Paginate")).toHaveLength(1);
  });

  it("should have a PaginationLinks component", () => {
    expect(wrapper.find("PaginationLinks")).toHaveLength(1);
  });

  it("should call handlePageSelect when a pagination link is clicked", () => {
    let paginationLink2 = wrapper.find("span").filterWhere(item => {
      return item.text() === "2";
    });
    console.log(wrapper.instance())
    paginationLink2.simulate("click");
    expect(wrapper.state().selectedPage).toEqual(2)
  });
});
