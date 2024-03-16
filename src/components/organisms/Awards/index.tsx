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

const Awards: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [index,setIndex] = useState<number>(0);
  const backPage = useRef();
  const nextPage = useRef();
  const { awards, hamburgerOptions } = portfolioContent;
  const { setRender, render , allowChangePage,setAllowChangePage,
    changeLanguage } = useContext(AppContext) as AppContextType;
  useEffect(() => {
    setTimeout(() => setAllowChangePage(true),1000);
  },[]);
  useEffect(() => {
    window.scrollTo(0,17)
    if (allowChangePage) {
      const observerBackPage = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) { 
          setAllowChangePage(false);
          setRender({page:'MyCareer',nextPage:false,afterPage:true});
        }
      });
      const observerNextPage = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) { 
          setAllowChangePage(false);
          setRender({page:'ContactUs',nextPage:true,afterPage:false});
        }
      });
      observerBackPage.observe(backPage.current as any);
      observerNextPage.observe(nextPage.current as any);
    }
  }, [backPage, setRender, nextPage, allowChangePage, setAllowChangePage]);

  return (
    <Container
      className={`${render.afterPage ? 'origin-bottom' : 'origin-top'}
      animate-render-page-white-to-gray`}
    >
      <Head>
        <title>{hamburgerOptions[changeLanguage][4]}</title>
      </Head>
      <Header
        className="create-white-hamburger-icon"
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      >
        {allowChangePage && (
          <div
            className="absolute -top-6 text-[#1b1b1b]"
            ref={backPage as any}
          >
            AFTER PAGE
          </div>)}
      </Header>
      <Main 
        className={`min-h-[90vh] phone:w-5/6`}
      >
        <ScrollBar />
        <Title
          className={`absolute left-[22%] top-[18%] font-bold text-6xl
          max-desktop:top-[16%] max-763:text-5xl max-tablet:text-4xl
          max-tablet:top-[12%] max-phone:top-[10%]`}
          content={changeLanguage === 0 ? "Prêmios" : "Awards"}/>
          <Button
            type="button"
            className={`absolute right-[34%] top-[18%] max-1650:right-[36%]
            max-1380:right-[37%] max-1150:right-[39%] max-desktop:top-[16%]
            max-900:right-[41%] max-763:top-[15%] max-763:right-[43%]
            max-tablet:right-[45%] max-630:right-[47%] max-phone:right-[49%]
            max-phone:top-[13%] hover:text-black  text-6xl`}
            onClick={() => {if(index > 0) setIndex(index - 1)}}
           >
            &#8592;
          </Button>
          <Paragraph
            className={`absolute right-[31%] top-[20.7%] max-1650:right-[32%]
            max-1380:right-[33%] max-1150:right-[34%] max-desktop:top-[18.7%]
            max-900:right-[35%] max-763:text-xl max-763:top-[17.8%]
            max-763:right-[37%] max-tablet:right-[37.5%] max-630:right-[39%]
            max-phone:right-[41%] max-phone:top-[15.8%] font-bold text-2xl`}
            content={`${index+1} / 5`}
          />
          <Button 
            type="button"
            className={`absolute right-[27.5%] top-[18%] max-desktop:top-[16%]
            max-763:top-[15%] max-phone:top-[13%] hover:text-black text-6xl`}
            onClick={() => { if(index < 4) setIndex(index + 1) }}
          >
            &#8594;
          </Button>
        <Container
          className={`w-1/2 absolute left-[22%] top-[30%] max-desktop:top-[26%]
          max-tablet:top-[20%] max-phone:top-[18%] font-bold`}
        >
          {awards[changeLanguage][index].map(({date,name,description},i) => (
            <Container key={name+"-"+i} className="pb-10">
              <Container className="flex justify-between max-763:flex-col pb-10">
                <Paragraph
                  className="text-xl max-1380:text-base max-630:text-sm"
                  content={date}
                />
                <Paragraph
                  className={`text-2xl max-1650:text-xl max-1380:text-base w-1/6
                  max-desktop:w-1/4 max-763:w-full max-763:py-2 max-630:text-sm`}
                  content={name}
                />
                <Paragraph
                  className={`text-xl max-1650:text-base max-1380:text-sm
                  max-763:w-full max-763:text-base font-normal w-1/3
                  max-desktop:w-2/5 max-630:text-sm text-[#5d5d5d]`}
                  content={description}
                />
              </Container>
              <hr className="border-1 border-[#5d5d5d]"/>
            </Container>
          ))}
        </Container>
        <SocialMediasNav color="white" />
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

export default Awards;