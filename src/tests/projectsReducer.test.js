import projectsReducer from "../reducers/projectsReducer";
import { GET_PROJECTS } from "../types";

describe("reduces projects", () => {
  it("defaults to empty projects if none are passed in", () => {
    expect(projectsReducer(undefined, {})).toEqual([]);
  });

  it("reduces projects", () => {
    expect(
      projectsReducer([], {
        type: GET_PROJECTS,
        payload: ["Project to be added to store"]
      })
    ).toEqual(["Project to be added to store"]);
  });
});
