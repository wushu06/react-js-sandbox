import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./ContextApp";

function ComponentJ() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      firstname: {user}, lastname {channel}
    </div>
  );
}

export default ComponentJ;
