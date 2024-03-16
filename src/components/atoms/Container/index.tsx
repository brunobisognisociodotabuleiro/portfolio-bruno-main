import React from "react";
import PropsContainer from "./types";

const Container: React.FC<PropsContainer> = (
  { className, children, onClick}: PropsContainer) => {
    return(
      <div className={className} onClick={onClick}>
        {children}
      </div>
    )
}


export default Container;