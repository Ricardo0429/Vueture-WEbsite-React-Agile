import React from "react";
import { mount } from "enzyme";
import UsersList from "../containers/UsersList";
import usersFixture from "../fixtures/users";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("UsersList", () => {
  let middlewares = [thunk];
  let mockStore = configureStore(middlewares);
  let initialState = {
    users: usersFixture
  };
  let store = mockStore(initialState);
  let wrapper;
  let context = {};

  wrapper = mount(
    <StaticRouter context={context}>
      <Provider store={store}>
        <UsersList />
      </Provider>
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
    paginationLink2.simulate("click");
    let usersList = wrapper.find("UsersList");
    expect(usersList.instance().state.selectedPage).toEqual(2);
  });
  
  it("shouldn't render a Project component without users", () => {
    store = mockStore({ users: [] });
    let wrapper = mount(
      <StaticRouter context={context}>
        <Provider store={store}>
          <UsersList />
        </Provider>
      </StaticRouter>
    );
    let usersList = wrapper.find("UsersList");
    
    usersList.instance().props({ users: ["something"] })
    expect(wrapper.find("User")).toHaveLength(0);
  });
});
