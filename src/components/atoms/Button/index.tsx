import React from "react";
import PropsButton from "./types";


const Button: React.FC<PropsButton> = (
  { children, onClick, className, type }: PropsButton) => {
  return(
    <button 
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  )
}

export default Button;