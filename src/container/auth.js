import React from "react";
import LoginForm from "./login";
import Home from "./home";
import { useUserContext } from "../context/userContext";

const Auth = () => {
  const {user}=useUserContext();
  return <>{user.isGuestUser? <LoginForm /> : <Home />}</>;
};

export default Auth;