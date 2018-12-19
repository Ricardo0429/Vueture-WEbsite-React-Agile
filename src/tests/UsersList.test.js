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
});
