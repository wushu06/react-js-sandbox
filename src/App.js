import React from "react";
import ComponentC from "./ComponentC";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      <UserContext.Provider value={"noureddine"}>
        <ChannelContext.Provider value={"latreche"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
