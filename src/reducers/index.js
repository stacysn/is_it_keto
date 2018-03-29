const initialState = {loggedIn: false};

export default = (state , action)  => {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        auth: action.payload
      })
    default:
      return state
  }
}