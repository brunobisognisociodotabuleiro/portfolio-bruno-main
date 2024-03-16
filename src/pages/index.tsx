import React, { useContext } from "react";
import Home from "@organisms/Home"
import Experiences from "@organisms/Experiences";
import Container from "@atoms/Container";
import { AppContext } from '@context/index';
import AppContextType from "@context/types";
import Technologies from "@organisms/Technologies";
import ContactUs from "@organisms/ContactUs";
import Awards from "@organisms/Awards";
import MyCareer from '@organisms/MyCareer/index';

const PortfolioPage: React.FC = () => {
  const { render } = useContext(AppContext) as AppContextType
  return (
  <Container>
    {render.page === 'Experiences' ? <Experiences /> : render.page === 'Technologies' 
    ? <Technologies/> : render.page === 'MyCareer' ? <MyCareer/>
    : render.page === 'Awards' ? <Awards /> 
    : render.page === 'ContactUs' ? <ContactUs/> : <Home/> }
  </Container>
  );
}

export default PortfolioPage;
