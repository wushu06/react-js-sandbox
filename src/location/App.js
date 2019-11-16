import React, { useEffect } from "react";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
import Listing from "./components/Listing";
import Trait from "./components/Trait";
import Production from "./components/Production";
import useToken from "./hooks/token";
export const TokenContext = React.createContext();

const App = () => {
  const [token] = useToken(10);

  return (
    <div>
      <h2>location collective</h2>
      {token && (
        <TokenContext.Provider value={token}>
          <Select />
          <Checkbox />
          <Trait />
          <Production />
          <Listing />
        </TokenContext.Provider>
      )}
    </div>
  );
};

export default App;
