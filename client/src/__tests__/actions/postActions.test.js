import configureMockStore from "redux-mock-store";
import * as postActions from "../../actions/postActions";
import * as types from "../../actions/types";
import axios from "axios";
import mockAdapter from "axios-mock-adapter";

let store;
let httpMock;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

beforeEach(() => {
  httpMock = new mockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
});

describe("basic post actions", () => {
  it("sets post loading", () => {
    const action = postActions.setPostLoading();
    expect(action).toEqual({ type: types.POST_LOADING });
  });
});

describe("getting posts actions", () => {
  it("fetches posts", async () => {
    httpMock.onGet("/api/posts").reply(200, {
      posts: [{ name: "post #1" }, { name: "post #2" }]
    });
    postActions.getPosts()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.POST_LOADING },
      {
        type: types.GET_POSTS,
        payload: { posts: [{ name: "post #1" }, { name: "post #2" }] }
      }
    ]);
  });

  it("doesn't fetch posts on error", async () => {
    httpMock.onGet("/api/posts").reply(400, {
      posts: [{ name: "post #1" }, { name: "post #2" }]
    });
    postActions.getPosts()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.POST_LOADING },
      { type: types.GET_POSTS, payload: null }
    ]);
  });
});

describe("adding posts actions", () => {
  const postData = {
    name: "post"
  };

  const errorData = {
    error: "error message"
  };

  it("adds a post", async () => {
    httpMock.onPost("/api/posts", postData).reply(200, {
      postData
    });

    postActions.addPost(postData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.ADD_POST, payload: { postData } }
    ]);
  });

  it("doesn't add a post on error", async () => {
    httpMock.onPost("/api/posts", postData).reply(400, {
      errorData
    });

    postActions.addPost(postData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.GET_ERRORS, payload: { errorData } }
    ]);
  });
});

describe("deleting posts actions", () => {
  const id = "5c46325996ca8019882f5c65";

  const errorData = {
    error: "error message"
  };

  it("deletes a post", async () => {
    httpMock.onDelete(`/api/items/${id}`).reply(200, {
      id
    });

    postActions.deletePost(id)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.DELETE_POST, payload: id }
    ]);
  });

  it("doesn't delete a post on error", async () => {
    httpMock.onDelete(`/api/posts/${id}`).reply(400, {
      errorData
    });

    postActions.deletePost(id)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.GET_ERRORS, payload: { errorData } }
    ]);
  });
});
