import {SET_USER_AUTH_CUSTOMER_INFO, SET_USER_AUTH_TOKEN, SET_USER_AUTH_TYPE} from "../types";

const handlers = {
  [SET_USER_AUTH_TYPE]: (state, {authType}) => ({...state, authType}),
  [SET_USER_AUTH_TOKEN]: (state, {authToken}) => ({...state, authToken}),
  [SET_USER_AUTH_CUSTOMER_INFO]: (state, {customerInfo}) => ({...state, customerInfo}),
  DEFAULT: state => state
};

export const UserReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};