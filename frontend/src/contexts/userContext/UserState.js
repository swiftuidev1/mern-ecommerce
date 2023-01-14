import React, {useEffect, useReducer} from "react";
import {UserContext} from "./userContext";
import {UserReducer} from "./UserReducer";
import {
  SET_USER_AUTH_CUSTOMER_INFO,
  SET_USER_AUTH_TOKEN,
  SET_USER_AUTH_TYPE,
  STORAGE_USER_AUTH_CUSTOMER_INFO,
  STORAGE_USER_AUTH_TOKEN,
  STORAGE_USER_AUTH_TYPE
} from "../types";
import axios from "axios";

export const UserState = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, {
    authType: null,
    authToken: null,
    customerInfo: null
  });


  if (state.authToken) axios.defaults.headers.common["Authorization"] = `Bearer ${state.authToken}`;

  useEffect(() => {
    const authType = localStorage.getItem(STORAGE_USER_AUTH_TYPE);
    const authToken = localStorage.getItem(STORAGE_USER_AUTH_TOKEN);
    const customerInfo = localStorage.getItem(STORAGE_USER_AUTH_CUSTOMER_INFO) ? JSON.parse(localStorage.getItem(STORAGE_USER_AUTH_CUSTOMER_INFO)) : null;
    if (!authToken || !customerInfo || !authType) {
      axios.post("/auth", {userAgent: navigator.userAgent}).then(resp => {
        if (resp.data) {
          dispatch({type: SET_USER_AUTH_TYPE, authType: "temporary"});
          localStorage.setItem(STORAGE_USER_AUTH_TYPE, "temporary");
          dispatch({type: SET_USER_AUTH_TOKEN, authToken: resp.data.token});
          localStorage.setItem(STORAGE_USER_AUTH_TOKEN, resp.data.token);
          dispatch({type: SET_USER_AUTH_CUSTOMER_INFO, customerInfo: resp.data.customerInfo});
          localStorage.setItem(STORAGE_USER_AUTH_CUSTOMER_INFO, JSON.stringify(resp.data.customerInfo));
        }
      }).catch(error => {
        console.log("Error in axios post request. ", error);
      });
    } else {
      dispatch({type: SET_USER_AUTH_TYPE, authType});
      dispatch({type: SET_USER_AUTH_TOKEN, authToken});
      dispatch({type: SET_USER_AUTH_CUSTOMER_INFO, customerInfo});
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        authType: state.authType,
        authToken: state.authToken,
        customerInfo: state.customerInfo
      }}
    >{children}</UserContext.Provider>
  );
};