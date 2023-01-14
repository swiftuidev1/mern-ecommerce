import {SET_USER_AUTH_TYPE} from "../types";

const handlers = {
  [SET_USER_AUTH_TYPE]: (state, {authType}) => ({...state, authType}),
  DEFAULT: state => state
};

export const UserReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};