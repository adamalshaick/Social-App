import configureMockStore from "redux-mock-store";
import * as authActions from "../../actions/authActions";
import * as types from "../../actions/types";
import mockAdapter from "axios-mock-adapter";
import axios from "axios";

let store;
let httpMock;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

beforeEach(() => {
  httpMock = new mockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
});

describe("login actions", () => {
  const decoded = "1234";
  const userData = {
    email: "email",
    password: "password"
  };
  const errorData = {
    email: "email error",
    password: "password error"
  };

  it("sets current user", () => {
    const action = authActions.setCurrentUser(decoded);
    expect(action).toEqual({ type: types.SET_CURRENT_USER, payload: "1234" });
  });

  it("doesnt login on error", async () => {
    httpMock.onPost("/api/users/login").reply(400, {
      errorData
    });
    authActions.loginUser(userData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      {
        type: types.GET_ERRORS,
        payload: {
          errorData: { email: "email error", password: "password error" }
        }
      }
    ]);
  });
});

describe("register actions", () => {
  const errorRegister = {
    name: "name error",
    email: "email error",
    password: "password error",
    password2: "password2 error"
  };
  const userData = {
    email: "email",
    password: "password"
  };

  it("doesnt register on error", async () => {
    httpMock.onPost("/api/users/register").reply(400, {
      errorRegister
    });
    authActions.registerUser(userData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      {
        type: types.GET_ERRORS,
        payload: {
          errorRegister: {
            name: "name error",
            email: "email error",
            password: "password error",
            password2: "password2 error"
          }
        }
      }
    ]);
  });
});
