import React from "react";
import PropsTitle from "./types";


const Title: React.FC<PropsTitle> = ({ content, className }:PropsTitle) => {
  return(<h1 className={className}>{content}</h1>);
}


export default Title;