import store from "../store";

describe("Store", () => {

  it('should update', async () => {
   await store.dispatch({
      type: 'GET_USERS',
      payload: ["Run the tests"]
    })
  
    expect(store.getState()).toEqual({
      users: ["Run the tests"]
    })
  })  
});
