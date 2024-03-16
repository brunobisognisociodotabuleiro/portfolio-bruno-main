import React, { useState, useRef, useEffect, useContext } from "react";
import Main from "@atoms/Main";
import Container from "@atoms/Container";
import Header from "@molecules/Header";
import Head from "next/head";
import Title from "@atoms/Title";
import SocialMediasNav from "@molecules/SocialMediaNav";
import Paragraph from "@atoms/Paragraph";
import { AppContext } from "@context/index";
import AppContextType from "@context/types";
import { portfolioContent } from '@constants/index';
import ScrollBar from "@molecules/ScrollBar";
import homePhoto from "@assets/fotohome_site.png"
import Image from "next/image";

const Home: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [projects,setProjects] = useState<number>(0);
  const [hackathons,setHackathons] = useState<number>(0);
  const { home, hamburgerOptions } = portfolioContent;
  const nextPage = useRef();
  const { setRender, render ,allowChangePage,
    setAllowChangePage,changeLanguage, } = useContext(AppContext) as (
    AppContextType);
    if(projects < 15) {

      setTimeout(() => {
        setProjects(projects + 1);
      },50);
    }
    if(hackathons < 17) {
      setTimeout(() => {
        setHackathons(hackathons + 1);
      },50);
   }
    useEffect(() => {
      setTimeout(() => setAllowChangePage(true),1000);
    },[]);
    useEffect(() => {
    if(allowChangePage) {
      window.scrollTo(0,7)
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if(entry.isIntersecting) {
          setAllowChangePage(false);
          setRender({page:'Experiences',nextPage:true,afterPage:false});
        }
      });
      observer.observe(nextPage.current as any);
    }
    },[nextPage,setRender, allowChangePage, isClicked,
      setAllowChangePage]);
  return (
    <Container
      className={
        `${render.afterPage ? 'origin-bottom' : 'origin-top'} 
        animate-render-page-white-to-red max-1830:min-h-[100vh]`}
    >
    <Head>
      <title>{hamburgerOptions[changeLanguage][0]}</title>
    </Head>
    <Header
      className="create-white-hamburger-icon"
      isClicked={isClicked}
      setIsClicked={setIsClicked}
    />
    <Main className="max-h-[90vh]">
      <ScrollBar />
      <Container className={`relative -top-[14rem] max-1830:mr-[45%]
      max-1830:-top-[6rem] max-1830:left-[25%] max-1550:-top-[1rem]`}
      >
        <Image className={`ml-[35%] w-[90rem] h-[70rem] max-1830:h-[55rem]
        max-1550:h-[50rem] max-1350:w-0`}
        src={homePhoto}
        alt="homePhoto"
        />
      </Container>
      <Container
        className={`flex flex-wrap text-center justify-center
        absolute left-[38%] top-[30%] max-phone:left-[34%]
        max-tablet:left-[36%] max-phone:top-[36%] max-tablet:top-[34%]
        font-bold w-1/4`}
      >
        <Title
          className="ml-10 max-tablet:text-6xl max-phone:text-5xl text-7xl"
          content={home[changeLanguage][0]}
        />
        <Container className="flex p-5 text-start m-8">
          <Container className="mx-6">
            <Container
              className={`flex bg-[#c31b25] phone:ml-10 phone:px-3 phone:py-2
              tablet:py-3 tablet:px-5 rounded-lg shadow-[0_2px_0_0_#c2313a]`}
            >
              <Paragraph
                className="max-phone:text-4xl text-6xl max-tablet:text-5xl"
                content={String(projects)}
              />
              <Paragraph
                className="text-lg max-tablet:text-base max-phone:text-sm px-3"
                content={home[changeLanguage][1]}
              />
            </Container>
          </Container>
          <Container>
            <Container
              className={`flex bg-[#c31b25] phone:px-3 phone:py-2 tablet:px-5
              tablet:py-3 rounded-lg shadow-[0_2px_0_0_#c2313a]`}
            >
              <Paragraph
                className="max-phone:text-4xl text-6xl max-tablet:text-5xl"
                content={String(hackathons)}
              />
              <Paragraph
              className="text-lg max-tablet:text-base max-phone:text-sm px-3"
              content={home[changeLanguage][2]}
            />
            </Container>
          </Container>
        </Container>
      </Container>
      <SocialMediasNav color="white"/>
    </Main>
    {allowChangePage && (
      <div ref={nextPage as any} className="absolute text-white">NEXT PAGE</div>)
    }
    </Container>
  )
}

export default Home;