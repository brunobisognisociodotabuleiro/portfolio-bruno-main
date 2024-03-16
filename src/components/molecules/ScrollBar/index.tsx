import React, { useContext } from "react";
import { AppContext } from "@context/index";
import AppContextType from "@context/types";


const ScrollBar: React.FC = () => {
  const { render } = useContext(AppContext) as (
    AppContextType);

  return(
    <ul 
      className={`flex flex-col absolute top-[34%]
      start-[3.3rem] ${render.page === 'Experiences' 
      || render.page === 'MyCareer' || render.page === 'ContactUs' ?
      'bg-[rgba(16,16,16,.1)]' : render.page === 'Technologies'
      || render.page === 'Awards' ? 'bg-[rgba(255,255,255,.1)]'
      : 'bg-[#b11b24]'} h-[25%]  w-0.5 `}
    >
      <li className={`${render.page === 'Home' ? render.nextPage ?
      'animate-scrollBar-home-initial' : 'animate-scrollBar-experiences-to-home'
      : render.page === 'Experiences' ? render.nextPage ?
      'animate-scrollBar-home-to-experiences' 
      : 'animate-scrollBar-technologies-to-experiences' : render.page === 'Technologies'
      ? render.nextPage ? 'animate-scrollBar-experiences-to-technologies'
      : 'animate-scrollBar-myCareer-to-technologies' : render.page === 'MyCareer'
      ? render.nextPage ? 'animate-scrollBar-technologies-to-myCareer'
      : 'animate-scrollBar-awards-to-myCareer' : render.page === 'Awards'
      ? render.nextPage ? 'animate-scrollBar-myCareer-to-awards'
      : 'animate-scrollBar-contactUs-to-awards'
      : 'animate-scrollBar-awards-to-contactUs'
      } `}/>
    </ul>
  );
}

export default ScrollBar;