import projectsReducer from "../reducers/projectsReducer";
import { GET_PROJECTS } from "../types";

describe("reduces projects", () => {
  it("defaults to empty projects if none are passed in", () => {
    expect(projectsReducer(undefined, {})).toEqual([]);
  });
});
