import eventsFixture from "../fixtures/events.js";

describe("it contains an events array", () => {
  it("should be an array", () => {
    expect(Array.isArray(eventsFixture)).toBeTruthy;
  });

  it("should be an object containing event details", () => {
    expect(eventsFixture).toContainEqual({
      end: "2018-11-28T12:17:00",
      start: "2018-11-28T12:02:00",
      title: '"Martin Fowler" Scrum'
    });
  });
});