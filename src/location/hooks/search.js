import { useState } from "react";
import axios from "axios";

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
  setters: []
};

// Bind the setState function to the store object so
// we don't lose context when calling it elsewhere
store.setState = store.setState.bind(store); // so we can use this.state

function axiosCall(term, url) {
  if (term === "") {
    return;
  }
  let href = !url
    ? `https://jsonplaceholder.typicode.com/todos/${term}`
    : `https://jsonplaceholder.typicode.com/photos/${term}`;

  return axios.get(href);
}
// this is the custom hook we'll call on components.
export function useStore() {
  const [state, set] = useState(store.state);

  if (!store.setters.includes(set)) {
    store.setters.push(set);
  }

  return [state, store.setState];
}
