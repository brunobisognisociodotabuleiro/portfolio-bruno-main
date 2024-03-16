import React from "react";
import AnchorProps from "./types";

const Anchor: React.FC<AnchorProps> = ({
className,
href,
children
}) => {
  return(<a target="_blank" className={className} href={href}>{children}</a>);
}

export default Anchor;