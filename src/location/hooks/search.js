import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { TokenContext } from "../App";

export const store = {
  state: {
    type: null,
    payload: null
  },
  setState(value, url = false) {
    let type = !url ? "data" : "images";
    if (value !== "") {
      this.state = { type, payload: axiosCall(value, url) };
    } else {
      this.state = null;
    }
    this.setters.forEach(setter => setter(this.state));
  },
  setters: [],
  token: null,
  check: false
};

// Bind the setState function to the store object so
// we don't lose context when calling it elsewhere
store.setState = store.setState.bind(store); // so we can use this.state
function axiosCall(term, url) {
  if (term === "" && !store.token) {
    return;
  }
  let userUrl = !store.check
    ? "https://jsonplaceholder.typicode.com/todos/"
    : `https://jsonplaceholder.typicode.com/todos/${term}`;

  let href = !url
    ? userUrl
    : `https://jsonplaceholder.typicode.com/photos/${term}`;

  return axios.get(href);
}
// this is the custom hook we'll call on components.
export function useStore() {
  store.token = useContext(TokenContext);

  const [state, set] = useState(store.state);
  useEffect(() => {
    window.addEventListener("printerstatechanged", e => {
      store.check = e.detail;
    });
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  if (!store.setters.includes(set)) {
    store.setters.push(set);
  }

  return [state, store.setState];
}
