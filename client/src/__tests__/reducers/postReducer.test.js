import postReducer from "../../reducers/postReducer";
import * as types from "../../actions/types";

describe("INITIAL_STATE", () => {
  it("returns initial state", () => {
    const action = { type: "dummy_action" };
    const initialState = { posts: [], post: {}, loading: false };
    expect(postReducer(undefined, action)).toEqual(initialState);
  });
});

describe("POST_LOADING", () => {
  it("returns the correct state", () => {
    const initialState = { posts: [] };
    const action = { type: types.POST_LOADING };
    const expectedState = { posts: [], loading: true };

    expect(postReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("GET_POSTS", () => {
  it("returns the correct state", () => {
    const initialState = { posts: [] };
    const action = { type: types.GET_POSTS, payload: "new post" };
    const expectedState = { posts: "new post", loading: false };

    expect(postReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("ADD_POST", () => {
  const initialState = { posts: ["first post", "second post"] };
  const action = { type: types.ADD_POST, payload: "new post" };
  const expectedState = {
    posts: ["new post", "first post", "second post"]
  };
  expect(postReducer(initialState, action)).toEqual(expectedState);
});

describe("DELETE_POST", () => {
  const initialState = {
    posts: [{ _id: "first post" }, { _id: "second post" }]
  };
  const action = { type: types.DELETE_POST, payload: "first post" };
  const expectedState = {
    posts: [{ _id: "second post" }]
  };
  expect(postReducer(initialState, action)).toEqual(expectedState);
});
