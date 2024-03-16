import React from 'react';
import NavProps from "./types";

const Nav: React.FC<NavProps> = ({
  className,
  children,
}: NavProps) => {
  return(<nav className={className}>{children}</nav>);
}

export default Nav;