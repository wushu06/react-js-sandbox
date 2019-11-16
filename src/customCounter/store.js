import { useState } from "react";
let init = 0;
export const store = {
  state: 0,
  setState(value) {
    switch (value) {
      case "increase":
        this.state = this.state + 1;
        break;
      case "decrease":
        this.state = this.state - 1;
        break;
      case "reset":
        this.state = 0;
        break;
      default:
        this.state = this.state;
      //this.state = value;
    }
    this.setters.forEach(setter => setter(this.state));
  },
  setters: []
};

// Bind the setState function to the store object so
// we don't lose context when calling it elsewhere
store.setState = store.setState.bind(store); // so we can use this.state

// this is the custom hook we'll call on components.
export function useStore() {
  const [state, set] = useState(store.state);

  if (!store.setters.includes(set)) {
    store.setters.push(set);
  }

  return [state, store.setState];
}
