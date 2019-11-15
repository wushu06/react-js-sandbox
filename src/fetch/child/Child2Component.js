import React, { useContext, useEffect } from "react";
import { DataContext } from "../fetch2";

function Child2Component() {
  const data = useContext(DataContext);
  useEffect(() => {
    console.log(data);
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
      <h2>Showing fetched data using useContext</h2>
      {data ? showData(data) : "no data"}
    </div>
  );
}

export default Child2Component;
