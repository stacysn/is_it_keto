const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_USER_ID = "SET_USER_ID";

export function login(userName, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(userName, password, callback => {
      dispatch(setLoginPending(false));
      if (callback !== "Invalid username and password") {
        dispatch(setUserId(callback));
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(new Error(callback)));
      }
    });
  };
}

export function logout() {
  return dispatch => {
    dispatch(setLoginPending(false));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    dispatch(setUserId(null));
  };
}

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}

function setUserId(id) {
  return {
    type: SET_USER_ID,
    id
  };
}

function callLoginApi(userName, password, callback) {
  setTimeout(() => {
    fetch("http://localhost:3001/api/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      return response.json().then(json => {
        const userValues = Object.values(json);
        for (let i = 0; (userValues.length - 1)>=i; i++) {
          if (
            userValues[i].userName === userName &&
            userValues[i].password === password
          ) {
            return callback(userValues[i]._id);
          }
        }
        return callback("Invalid username and password");
      });
    });
  }, 1000);
}

export default function reducer(
  state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null,
    userId: null
  },
  action
) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    case SET_USER_ID:
      return Object.assign({}, state, {
        userId: action.id
      });

    default:
      return state;
  }
}
