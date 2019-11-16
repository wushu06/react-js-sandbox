import { useState, useReducer } from "react";
const initialState = {
  data: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { data: action.payload + 1 };
    case "decrease":
      return { data: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const useCounter = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  function increase() {
    setCount(prevCount => prevCount + 1);
    dispatch({ type: "increase", payload: state.data });
  }

  function decrease() {
    setCount(prevCount => prevCount - 1);
    dispatch({ type: "decrease", payload: state.data - 1 });
  }

  function reset() {
    setCount(0);
    dispatch({ type: "reset", payload: state.data });
  }

  return [count, increase, decrease, reset, state];
};
export default useCounter;
