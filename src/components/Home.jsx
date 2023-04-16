import React, { useContext } from "react";
import AuthProvider, { AuthContext } from "./AuthProvider";

const Home = () => {
  const { user, createUser } = useContext(AuthContext);
  console.log(user, createUser);
  return <div>{user && user.name}</div>;
};

export default Home;
