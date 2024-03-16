import React, { useContext } from "react";
import Section from "@atoms/Section";
import HeaderProps from "./types";
import Container from '@atoms/Container';
import Title from '@atoms/Title';
import Button from "@atoms/Button";
import Paragraph from '@atoms/Paragraph';
import { portfolioContent } from "@constants/index";
import Nav from "@atoms/Nav";
import LinkTo from "@atoms/LinkTo";
import { AppContext } from "@context/index";
import AppContextType from "@context/types";
import Image from "next/image";
import coloredTheUsaFlag from '@assets/hamburgerIcons/colored-the-usa-flag.svg';
import coloredBrazilFlag from '@assets/hamburgerIcons/colored-brazil-flag.svg';
import noColoredTheUsaFlag from '@assets/hamburgerIcons/no-colored-the-usa-flag.svg';
import noColoredBrazilFlag from '@assets/hamburgerIcons/no-colored-brazil-flag.svg';

const Header: React.FC<HeaderProps> = ({
  className,
  isClicked,
  setIsClicked,
  children,
 }: HeaderProps) => {
    const { infos,hamburgerOptions } = portfolioContent;
    const { setRender, setChangeLanguage, setAllowChangePage,
    changeLanguage } = useContext(AppContext) as AppContextType;
    const goTo = (index:number) => {
      const changePage = index === 0 ?
      { page:'Home',nextPage: true, afterPage: false }
      : index === 1 ? { page:'Experiences',nextPage: false, afterPage: false } 
      : index === 2 ? { page:'Technologies',nextPage: true, afterPage: false }
      : index === 3 ? { page:'MyCareer',nextPage: true, afterPage: false }
      : index === 4 ? { page:'Awards',nextPage: true, afterPage: false }
      : { page:'ContactUs',nextPage: true, afterPage: false }
      setRender(changePage);
      setAllowChangePage(false);
    }
    return(
      <Container>
      {children}
      <header className="header">
        <Section className="mx-auto p-10 flex justify-between items-center">
          <Container className="flex items-center">
            <Title
              className="tablet:text-3xl phone:text-4xl font-bold pr-4"
              content="Bruno Bisogni"
              />
            <Container className="flex desktop:mx-20 tablet:mx-10 tablet:flex-wrap">
              {infos.map((content,i) => (
                <Paragraph 
                className={`font-medium hidden tablet:block tablet:px-1 
                ${i === 1 ? 'opacity-50' : ''}`}
                content={content} key={`p-${i}`}
                />))}
              </Container>
          </Container>
          <Container>
            <Button 
              type ="button"
              onClick={() => setIsClicked(!isClicked)}
              className={`hamburger-button ${isClicked ? 'toggle-btn' : ''}`}>
              <Container className={className} />
            </Button>
          </Container>
        </Section>
        <Section 
          className={`hamburger-options ${isClicked ? 'flex' : 'hidden'}`}
          >
          <Button
            type="button"
            className="text-5xl self-end p-6 "
            onClick={() => setIsClicked(!isClicked)} />
          <Nav className="flex flex-col min-h-screen py-[20%] font-bold">
            <Container className="flex text-xl absolute top-5 left-12 w-24">
              <Container>
                <Button 
                  type="button"
                  className={`links`}
                  onClick={() => setChangeLanguage(0)}
                >
                  <Image
                    src={changeLanguage === 1 ? noColoredBrazilFlag
                    : coloredBrazilFlag}
                    alt="Brazil-flag"
                  />
                </Button>
              </Container>
              <Container>
                <Button
                  type="button"
                  className={`links ml-6 `}
                  onClick={() => setChangeLanguage(1)}
                >
                  <Image
                    src={changeLanguage === 0 ? noColoredTheUsaFlag
                    : coloredTheUsaFlag}
                    alt="The-Usa-flag"
                  />
                </Button>
              </Container>
            </Container>
            {hamburgerOptions[changeLanguage].map((content,i) => (
              <LinkTo
              className="links hover:cursor-pointer"
              content={content}
              key={`Link-${i}`}
              onClick={() => goTo(i)}
              />))}
          </Nav>
        </Section>
      </header>
      </Container>
    );
}

export default Header;