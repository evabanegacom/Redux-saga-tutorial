import * as types from '../types';
  
  const initialState = {
    access_token: localStorage.getItem("token"),
    isAuthenticated: JSON.parse(localStorage.getItem('data') || '{}'),
    loading: false,
    data: null,
    updateAccount: [],
    isUpdateAccount: false,
    loginSuccess: [],
    isError: false,
  };
  
  export default function (state = initialState, action:any) {
    const { type, payload } = action;
    payload && console.log('reducer-user', payload.user)
    payload && console.log('payload-itself', payload)
    payload && console.log('reducer-token', payload.token)
    switch (type) {
      case types.LOGIN_LOADING:
        return {
          ...state,
          loading: true,
        };
      case types.RESET_TO_FALSE:
        return {
          ...state,
          isError: false,
          loading: false,
        };
      case types.SIGNUP_SUCCESS:
      case types.LOGIN_SUCCESS:
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("data", JSON.stringify(payload));
        return {
          ...state,
          ...payload,
          isAuthenticated: JSON.parse(localStorage.getItem('data') || '{}'),
          loading: true,
        };
      case types.USER_LOADED:
        localStorage.setItem("user", JSON.stringify(payload?.user));
        return {
          ...state,
          data: payload,
          loading: false,
        };
      case types.LOGOUT:
      case types.LOGIN_FAIL:
      case types.SIGNUP_FAIL:
        localStorage.removeItem("token");
        localStorage.removeItem("data");
        return {
          ...state,
          access_token: null,
          isAuthenticated: false,
          loading: false,
          isError: true,
        };
      default:
        return state;
    }
  }