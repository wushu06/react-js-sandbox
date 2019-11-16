import { useEffect, useState } from "react";
import axios from "axios";

export default function useToken(currentToken) {
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (currentToken === 10) {
      setToken(currentToken);
    } else {
      axios.get("https://jsonplaceholder.typicode.com/todos/10").then(res => {
        setToken(res.data);
      });
    }
  }, [currentToken]);
  return [token];
}
