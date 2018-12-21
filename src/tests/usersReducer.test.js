import usersReducer from "../reducers/usersReducer";
import { GET_USERS } from "../types";

describe("reduces users", () => {
  it("defaults to empty projects if none are passed in", () => {
    expect(usersReducer(undefined, {})).toEqual([]);
  });

  it("reduces users", () => {
    expect(
      usersReducer([], {
        type: GET_USERS,
        payload: ["User to be added to store"]
      })
    ).toEqual(["User to be added to store"]);
  });
});
