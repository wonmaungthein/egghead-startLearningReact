import React from "react";

function Message({ Text }) {
  return Text ? <span> {Text} </span> : <span>There is no message</span>;
}

export default Message;
