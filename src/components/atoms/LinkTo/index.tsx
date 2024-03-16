import React from "react";
import PropsLink from "./types";
const LinkTo: React.FC<PropsLink> = ({className, content,onClick}:PropsLink) => {
  return(<a className={className} onClick={onClick}>{content}</a>);
};


export default LinkTo;