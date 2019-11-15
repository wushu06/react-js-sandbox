import React from "react";
import { useSearch } from "./search";
import ChildComponent from "./child/childComponent";
export const DataContext = React.createContext();
const index = () => {
  const [data] = useSearch("", []);

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
      <h2>Data using useSearch</h2>
      {data && showData(data)}

      <h2>Child using fetch2</h2>
      {data && (
        <DataContext.Provider value={data}>
          <ChildComponent />
        </DataContext.Provider>
      )}
    </div>
  );
};

export default index;
