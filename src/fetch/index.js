import React, { useReducer, useState, useEffect } from "react";
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
const index = () => {
  const [data, setData] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      setData(res.data);
      dispatch({ type: "fetch", payload: res.data });
    });
  }, []);
  const showData = data => {
    return data.map(res => {
      while (res.id <= 10) {
        return (
          <p key={res.id}>
            {res.id} - {res.title}
          </p>
        );
      }
    });
  };
  return (
    <div>
      <h2>Data using useReducer</h2>
      {state.data && showData(state.data)}
      <h2>Data using useStata</h2>
      {data && showData(data)}
    </div>
  );
};

export default index;
