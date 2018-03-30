const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

export function login(userName, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(userName, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
}

export function logout() {
    return dispatch => {
      dispatch(setLoginPending(false));
      dispatch(setLoginSuccess(false));
      dispatch(setLoginError(null));
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

function callLoginApi(userName, password, callback) {
  setTimeout(() => {
    fetch("http://localhost:3001/api/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      return response.json().then(json => {
        const userValues = Object.values(json);
        for (let i = 0; userValues.length - 1; i++) {
          if (
            userValues[i].userName === userName &&
            userValues[i].password === password
          ) {
            return callback(null);
            break;
          } else if (Object.values(json).length - 1 === i) {
            return callback(new Error("Invalid username and password"));
          }
        }
      });
    });
  }, 1000);
}

export default function reducer(
  state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
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

    default:
      return state;
  }
}
