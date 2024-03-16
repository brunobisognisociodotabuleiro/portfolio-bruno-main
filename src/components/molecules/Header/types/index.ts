import { Dispatch, SetStateAction, ReactNode } from "react";

export default interface HeaderProps {
  className: string;
  isClicked: boolean;
  children?: ReactNode;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
};