import React, { useState, useEffect } from "react";
import { useStore } from "../hooks/search";

const index = () => {
  const [data] = useStore();
  const [result, setResult] = useState(null);

  useEffect(() => {
    let result = [];
    data.payload &&
      data.payload.then(res => {
        if (!res.data.length) {
          result.push(res.data);
        } else {
          result = res.data;
        }
        console.log(res.data.length);
        setResult(result);
      });
  }, [data]);
  const showData = () => {
    return result.map(res => {
      while (res.id <= 10) {
        return (
          <p key={res.id}>
            {res.id} - {res.title}
          </p>
        );
      }
    });
  };

  const showImages = () => {
    return result.map(res => {
      while (res.id <= 10) {
        console.log(res.id);
        return (
          <div key={res.id}>
            <img src={res.thumbnailUrl} alt="" width="50" />
            <p>{res.id}</p>
          </div>
        );
      }
    });
  };
  return (
    <div>
      {result && (
        <div>
          <h2>search result</h2>
          {data.type === "data" ? showData() : showImages()}
        </div>
      )}
    </div>
  );
};

export default index;
