import { useEffect } from "react";
function useCustomCount(count) {
  useEffect(() => {
    document.title = count;
    console.log(count);
  }, [count]);
}

export default useCustomCount;
