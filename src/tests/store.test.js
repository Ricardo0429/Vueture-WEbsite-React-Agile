import store from "../store";

describe("Store", () => {

  it('should update', async () => {
   await store.dispatch({
      type: 'GET_EVENTS',
      payload: ["Run the tests"]
    })
  
    expect(store.getState()).toEqual({
      events: ["Run the tests"]
    })
  })  
});

