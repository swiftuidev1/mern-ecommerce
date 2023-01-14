import React, {useEffect, useReducer} from "react";
import {UserContext} from "./userContext";
import {UserReducer} from "./UserReducer";
import {SET_USER_AUTH_TYPE, STORAGE_USER_AUTH_TYPE} from "../types";

export const UserState = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, {
    authType: null,
    authInfo: {
      jwtToken: null
    },
    userInfo: null,
    suggestions: []
  });

  useEffect(() => {
    const authType = localStorage.getItem(STORAGE_USER_AUTH_TYPE);
    if (!authType) {
      // create temporary user
      localStorage.setItem(STORAGE_USER_AUTH_TYPE, "temporary");
    }
    dispatch({type: SET_USER_AUTH_TYPE, authType});

  }, []);

  return (
    <UserContext.Provider
      value={{
        authType: state.authType,
        authInfo: state.authInfo
      }}
    >{children}</UserContext.Provider>
  );
};