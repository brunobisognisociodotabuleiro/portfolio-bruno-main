import React, { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Header from '@molecules/Header';
import Container from "@atoms/Container";
import Main from "@atoms/Main";
import { AppContext } from "@context/index";
import AppContextType from "@context/types";
import SocialMediasNav from "@molecules/SocialMediaNav";
import { portfolioContent } from '@constants/index';
import Title from "@atoms/Title";
import Image from "next/image";
import ScrollBar from "@molecules/ScrollBar";

const Technologies = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const { technologiesTimeline, hamburgerOptions } = portfolioContent;
    const backPage = useRef();
    const nextPage = useRef();
    const { setRender, render , allowChangePage, setAllowChangePage,
        changeLanguage } = useContext(AppContext) as AppContextType;
    useEffect(() => {
        setTimeout(() => setAllowChangePage(true),1000);
        },[]);
    useEffect(() => {
        window.scrollTo(0,15);
        if (allowChangePage) {
        const observerBackPage = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setAllowChangePage(false);
                setRender({page:'Experiences',nextPage:false,afterPage:true});
            }
        });
        const observerNextPage = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setRender({page:'MyCareer',nextPage:true,afterPage:false});
                setAllowChangePage(false);
            }
        });
        observerBackPage.observe(backPage.current as any);
        observerNextPage.observe(nextPage.current as any);
        }
    }, [backPage, setRender, nextPage, allowChangePage, setAllowChangePage]);

    return(
        <Container className={`${ render.nextPage ? 'origin-top'
        : 'origin-bottom'} animate-render-page-white-to-gray`}
        >
            <Head>
            <title>{hamburgerOptions[changeLanguage][2]}</title>
            </Head>
            <Header
            className="create-white-hamburger-icon"
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            >
                {allowChangePage && (
                    <div
                        className="mb-5 absolute -top-5 text-[#1b1b1b]"
                        ref={backPage as any}
                    >
                        AFTER PAGE
                    </div>)}
            </Header>
            <Main className="flex mt-14 min-h-[85vh] justify-center">
                <ScrollBar/>
                <Container className={`w-1/3 font-bold absolute
                    left-[35%] top-[12%] max-tablet:left-[30%]
                    ${isClicked ? 'z-0' :''}`}>
                    <Title 
                        className="max-763:text-4xl text-6xl font-bold mb-10"
                        content={changeLanguage === 0 ? 'Tecnologias'
                        : 'Technologies'}
                    />
                    <Container className="ml-4 mt-5 text-left">
                        {technologiesTimeline.map(({area,images},i,a) => (
                            <Container
                                key={`technology-${i}`}
                                className="flex relative"
                            >
                                <Container
                                    className={`border-r-2 absolute h-full
                                    top-2 z-10`}
                                >
                                    <FontAwesomeIcon 
                                        icon={faCircle}
                                        className=" -top-1 -ml-2 absolute"
                                    />
                                    <Container
                                        className={`absolute max-desktop:text-sm
                                         top-[73%] section -ml-8 font-bold
                                         italic`}
                                    >
                                        {area}
                                    </Container>
                                    {i === a.length - 1 && (
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        className=" bottom-0 -ml-2 absolute"
                                    />)}
                                </Container>
                                <Container className={`ml-6 pt-5 flex flex-wrap
                                w-1/4 max-1830:w-1/3 max-1350:w-1/2
                                max-920:w-full text-center`}>
                                    {images.map(({src,alt},i) => (
                                        <Container
                                            key={alt+'-'+i}
                                            className="mb-8 mr-2"
                                        >
                                            <Container>
                                                <Image
                                                    className={`max-550:w-6
                                                    w-10`}
                                                    src={src}
                                                    alt={alt}
                                                />
                                            </Container>
                                        </Container>
                                    ))}
                                </Container>
                            </Container>
                        ))}
                    </Container>
                </Container>
                <SocialMediasNav color="white" />
            </Main>
            {allowChangePage && (
            <div
                className="absolute -bottom-30 text-white"
                ref={nextPage as any}
            >
                NEXT PAGE
            </div>)}
        </Container>);
}

export default Technologies;