import React, {useContext} from "react";
import {UserContext} from "../contexts/userContext/userContext";

export const Home = () => {
  const {authType} = useContext(UserContext);

  return (
    <div>
      <h1>Hello world!</h1>
      <pre>{authType}</pre>
    </div>
  );
};