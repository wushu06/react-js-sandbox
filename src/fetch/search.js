import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  data: null
};

const reducer = (state, action) => {
  if (action.type === "fetch") {
    return { data: action.payload };
  }
  return state;
};

export const useSearch = (pass, dependencies) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      dispatch({ type: "fetch", payload: res.data });
    });
  }, [dependencies]);
  return [state.data];
};
