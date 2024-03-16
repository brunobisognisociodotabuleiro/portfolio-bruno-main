import { Dispatch, SetStateAction } from 'react'

export interface IRender {
  page: string;
  nextPage: boolean;
  afterPage: boolean;
}

type AppContextType = {
  render: IRender;
  setRender: Dispatch<SetStateAction<IRender>>;
  changeLanguage: number;
  setChangeLanguage: Dispatch<SetStateAction<number>>;
  allowChangePage: boolean;
  setAllowChangePage: Dispatch<SetStateAction<boolean>>;
}

export default AppContextType;