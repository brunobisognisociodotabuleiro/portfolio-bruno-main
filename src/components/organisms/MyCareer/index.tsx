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
import Button from "@atoms/Button";
import ScrollBar from "@molecules/ScrollBar";

const MyCareer: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [index,setIndex] = useState<number>(0);
  const backPage = useRef();
  const nextPage = useRef();
  const { careerTimeline, hamburgerOptions } = portfolioContent;
  const { setRender, render , allowChangePage,setAllowChangePage,
    changeLanguage } = useContext(AppContext) as AppContextType;
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
          setRender({page:'Technologies',nextPage:false,afterPage:true});
        }
      });
      const observerNextPage = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAllowChangePage(false);
          setRender({page:'Awards',nextPage:true,afterPage:false});

        }
      });
      observerBackPage.observe(backPage.current as any);
      observerNextPage.observe(nextPage.current as any);
    }
  }, [backPage, setRender, nextPage, allowChangePage, setAllowChangePage]);

  return (
    <Container
      className={`${render.afterPage ? 'origin-bottom' : 'origin-top'}
      animate-render-page-gray-to-white`}
    >
      <Head>
        <title>{hamburgerOptions[changeLanguage][3]}</title>
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
          className={`absolute left-[22%] top-[15%] font-bold text-6xl
          max-800:text-5xl max-710:text-4xl max-phone:top-[12%]`}
        >
            <Title
            className=''
            content={changeLanguage === 0 ? "Minha" : "My"}
            />
             <Title
            className=''
            content={changeLanguage === 0 ? "Carreira" : "Career"}
            />
          </Container>
          <Button
            type="button"
            className={`absolute right-[34%] top-[25%] max-1650:right-[36%]
            max-1380:right-[37%] max-1150:right-[39%] max-desktop:top-[26%]
            max-900:right-[41%] max-800:top-[25%] max-800:right-[43%]
            max-710:right-[45%] max-710:top-[23%]
            max-630:right-[47%] max-phone:right-[49%] max-phone:top-[20.2%]
            hover:text-[#5d5d5d]  text-6xl`}
            onClick={() => {if(index > 0) setIndex(index - 1)}}
           >
            &#8592;
          </Button>
          <Paragraph
            className={`absolute right-[31%] top-[27.7%] max-1650:right-[32%]
            max-1380:right-[33%] max-1150:right-[34%] max-desktop:top-[28.8%]
            max-900:right-[35%] max-800:text-xl max-800:top-[27.8%]
            max-800:right-[37%] max-710:right-[38%] max-710:top-[25.8%]
            max-630:right-[39%] max-phone:right-[41%] max-phone:top-[23.2%]
            font-bold text-2xl`}
            content={`${index+1} / 4`}
          />
          <Button 
            type="button"
            className={`absolute right-[27.5%] top-[25%] max-desktop:top-[26%]
            max-800:top-[25%] max-710:top-[23%] max-phone:top-[20.2%]
            hover:text-[#5d5d5d] text-6xl`}
            onClick={() => { if(index < 3) setIndex(index + 1) }}
          >
            &#8594;
          </Button>
        <Container
          className={`w-1/2 absolute left-[22%] top-[35%] max-800:top-[32%]
          max-710:top-[30%] max-phone:top-[28%] font-bold`}
        >
          {careerTimeline[changeLanguage][index].map(({date,name,description},i) => (
            <Container key={name+"-"+i} className="pb-10">
              <Container className="flex justify-between max-800:flex-col pb-10">
                <Paragraph
                  className="text-xl max-1380:text-base max-710:text-sm"
                  content={date}
                />
                <Paragraph
                  className={`text-2xl max-1650:text-xl max-1380:text-base w-1/6
                  max-desktop:w-1/4 max-800:w-full max-800:py-2 max-710:text-sm`}
                  content={name}
                />
                <Paragraph
                  className={`text-xl max-1650:text-base max-1380:text-sm
                  max-800:w-full max-800:text-base font-normal w-1/3
                  max-desktop:w-2/5 max-710:text-sm text-[#5d5d5d]`}
                  content={description}
                />
              </Container>
              <hr className="border-black"/>
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

export default MyCareer;