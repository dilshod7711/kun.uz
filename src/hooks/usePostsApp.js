import React, { useContext } from "react";
import { Context } from "../context";

const usePostsApp = () => {
  const context = useContext(Context);
  return context;
};

export default usePostsApp;
