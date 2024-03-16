import React, { useState } from 'react';
import AppContextType, { IRender } from './types';

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [render, setRender] = useState<IRender>(
    { page:'Home',nextPage:true,afterPage:false });
  const [changeLanguage, setChangeLanguage] = useState<number>(0);
  const [allowChangePage,setAllowChangePage] = useState<boolean>(false);
  return(
    <AppContext.Provider value={
      { changeLanguage, setChangeLanguage, allowChangePage, setAllowChangePage,
      render, setRender }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;