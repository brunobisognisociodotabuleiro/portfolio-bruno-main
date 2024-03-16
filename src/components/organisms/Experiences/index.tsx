import React, { useState, useEffect, useRef, useContext } from "react";
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
import Button from '@atoms/Button';

const Experiences: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);
  const backPage = useRef();
  const nextPage = useRef();
  const { experiences, hamburgerOptions } = portfolioContent;
  const { setRender, render , allowChangePage,setAllowChangePage,
    changeLanguage } = useContext(AppContext) as AppContextType;
  const downloadButton = () => {
    const fileName = 'bruno_bisogni_CV.pdf';
    const aTag = document.createElement('a');
    aTag.href = `https://portfolio-bruno-woad.vercel.app/${fileName}`;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  if (yearsOfExperience < 15) {
    setTimeout(() => {
        setYearsOfExperience(yearsOfExperience + 1);
    }, 100);
  }
  useEffect(() => {
    setTimeout(() => setAllowChangePage(true),1000);
  },[]);
  useEffect(() => {
    window.scrollTo(0,11)
    if (allowChangePage) {
      const observerBackPage = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) { 
          setAllowChangePage(false);
          setRender({page:'Home',nextPage:false,afterPage:true});
        }
      });
      const observerNextPage = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAllowChangePage(false);
          setRender({page:'Technologies',nextPage:true,afterPage:false});
        }
      });
      observerBackPage.observe(backPage.current as any);
      observerNextPage.observe(nextPage.current as any);
    }
  }, [backPage, nextPage, allowChangePage, setAllowChangePage, setRender]);

  return (
    <Container
      className={`${render.afterPage ? 
      'origin-bottom animate-render-page-gray-to-white'
      : 'origin-top animate-render-page-red-to-white'}`}
    >
      <Head>
        <title>{hamburgerOptions[changeLanguage][1]}</title>
      </Head>
      <Header
        className="create-black-hamburger-icon"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      >
        {allowChangePage && (
          <div
            className="absolute -top-6 text-white"
            ref={backPage as any}
          >
            AFTER PAGE
          </div>)}
      </Header>
      <Main 
        className={`min-h-[90vh] phone:w-5/6`}
      >
        <ScrollBar />
        <Container
          className={`flex m-auto 
          font-bold w-5/6`}
        >
          <Container className="flex p-5 text-start m-[2%]">
              <Container
                className={`absolute top-[14%] left-[10%] 
                max-1150:left-[8%] max-desktop:top-[16%] max-phone:top-[11%]
                text-start w-1/6`}
              >
                <Title
                  className={`max-desktop:text-8xl max-795:text-7xl
                  max-710:text-6xl max-630:text-5xl text-9xl text-[#c3323a]`}
                  content={`${String(yearsOfExperience)}+`}
                />
                <Paragraph
                  className={`max-desktop:text-2xl max-795:text-xl
                  max-795:px-4 max-710:text-base max-710:px-3 text-3xl px-7
                  max-630:text-sm max-630:px-2 max-desktop:px-5 max-phone:text-xs`}
                  content={experiences.partOne[changeLanguage][0]}
                />
              </Container>
              <Button
              type="button"
              className={`bg-[#c31b25] absolute left-[11%] top-[40%] py-4
              px-10 max-1150:left-[10%] max-desktop:px-6 max-desktop:top-[37%] max-desktop:left-[9%]
              max-836:top-[36%] max-795:px-2 max-795:top-[32%] max-710:py-2
              max-710:px-1 max-710:top-[30%] max-710:left-[9%]
              max-630:top-[28%] max-630:left-[7%] max-630:py-1 max-phone:left-[3%]
              max-phone:top-[23%] rounded-lg shadow-[0_2px_3px_0_#c2313a]
              hover:bg-black hover:text-white
              hover:shadow-[0_2px_3px_0_black]`}
              onClick={downloadButton}
              >
                Download CV
              </Button>
            <Container
              className={`absolute top-[16%] left-[25%]
              max-1280:left-[30%] text-center max-desktop:top-[17%]
              max-1280:w-1/2 max-phone:top-[12%] max-550:left-[27%] w-2/3`}
            >
              <Title
                className={`max-desktop:text-3xl max-795:text-2xl text-4xl
                max-710:text-xl max-630:text-base`}
                content={experiences.partOne[changeLanguage][1]}
              />
            </Container>
          </Container>
        </Container>
          <Container
            className={`flex flex-wrap h-[40rem] justify-center text-center
            absolute top-[30%] left-[30%] max-795:top-[28%]
            max-550:left-[28%] w-1/2 max-phone:top-[22%]`}
          >
            {experiences.partTwo[changeLanguage]
              .map(({title,description},i) => (
              <Container key={title+'-'+i} className="w-full">
                <Title
                  className={`max-desktop:text-2xl max-795:text-xl
                  max-710:text-base text-3xl font-bold`}
                  content={title}
                />
                <Paragraph 
                  className={`max-desktop:text-lg max-795:text-base
                  max-710:text-sm max-phone:text-xs text-xl text-[#5c5c5c]`}
                  content={description}
                />
              </Container>
            ))}
          </Container>
        <SocialMediasNav color="black" />
      </Main>
      {allowChangePage && (
        <div 
          className="absolute -bottom-38 text-white"
          ref={nextPage as any}
        >
          NEXT PAGE
        </div>)}
    </Container>
  )
}

export default Experiences;