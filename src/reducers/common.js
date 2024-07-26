import {
  APP_LOAD,
  CLEAR_LOGOUT,
  CREATE_CUSTOMER,
  CUSTOMER_LOGIN_TOKEN,
  FETCH_CUSTOMER_PLANS,
  LOGOUT_USER,
} from "../constants/actionTypes";

const defaultState = {
  pageHeading: "Dashboard",
  appName: "vcalc",
  token: null,
  viewChangeCounter: 0,
  dashboardData: [],
  loginSuccess: false,
  redirectTo: false,
  loginError: null,
  appLoaded: false,
  logoutRedirectTo: false,
  currentUser: null,
  logoutUserRedirectTo: false,
  showLoader: false,
  customerPlans: null,
  redirectToAccount: false,
  notFirstlogin: false,
  customerUser: null,
  successMsg: null,
  errorMsg: null,
  spStatus: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoaded: true,
        currentUser:
          action.payload && action.payload.data ? action.payload.data : null,
        spStatus:
          action.payload && action.payload.data ? action.payload.data : null,
      };

    case CLEAR_LOGOUT:
      return {
        ...state,
        logoutRedirectTo: false,
        redirectTo: false,
        logoutUserRedirectTo: false,
        currentUser: null,
      };

    case CREATE_CUSTOMER:
      return {
        ...state,
        customerUser:
          action.payload && action.payload.data ? action.payload.data : null,
        successMsg:
          action.payload && action.payload.isSuccess
            ? action.payload.message
            : null,
        errorMsg:
          action.payload && !action.payload.isSuccess
            ? action.payload.message
            : null,
        spStatus:
          action.payload && action.payload.data
            ? action.payload.data.sub_status
            : null,
      };

    case CUSTOMER_LOGIN_TOKEN:
      return {
        ...state,
        redirectToAccount:
          action.payload && action.payload.data && action.payload.data.token
            ? true
            : false,
        loginSuccess:
          action.error || (action.payload && action.payload.isSuccess)
            ? true
            : false,
        loginError:
          action.payload && !action.payload.isSuccess
            ? action.payload.message
            : null,
        token:
          action.payload && action.payload.data && action.payload.data.token
            ? action.payload.data.token
            : null,
        currentUser:
          action.payload && action.payload.data && action.payload.data
            ? action.payload.data
            : null,
        notFirstlogin:
          action.payload && action.payload.data && action.payload.data
            ? true
            : false,
      };

    case FETCH_CUSTOMER_PLANS:
      return {
        ...state,
        customerPlans:
          action.payload && action.payload.data ? action.payload.data : null,
      };

    case LOGOUT_USER:
      return {
        ...state,
        logoutUserRedirectTo: true,
        token: null,
        loginSuccess: false,
        // businessPlans: null,
        // customerPlans: null,
      };

    default:
      return state;
  }
};
