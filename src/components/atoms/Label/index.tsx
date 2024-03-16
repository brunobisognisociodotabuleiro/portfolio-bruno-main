import React from "react";
import PropsLabel from "./types";


const Label: React.FC<PropsLabel> = (
  {content,htmlFor, className} :PropsLabel) => {
  return(
    <label className={className} htmlFor={htmlFor}>
      {content}
    </label>
  )
}

export default Label;