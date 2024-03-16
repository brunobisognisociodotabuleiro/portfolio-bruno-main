import React, { useState, useEffect, useRef, useContext } from "react";
import Main from "@atoms/Main";
import ReactModal from 'react-modal';
import Container from "@atoms/Container";
import Header from "@molecules/Header";
import Head from "next/head";
import Title from "@atoms/Title";
import SocialMediasNav from "@molecules/SocialMediaNav";
import { AppContext } from "@context/index";
import AppContextType from "@context/types";
import { portfolioContent } from '@constants/index';
import ScrollBar from "@molecules/ScrollBar";
import emailjs from "@emailjs/browser";
import ContactUsInput from "@molecules/ContactUsInput";
import ContactUsTextArea from "@molecules/ContactUsTextArea";
import Button from '@atoms/Button';
import Paragraph from "@atoms/Paragraph";

const ContactUs: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [showModal,setShowModal] = useState<boolean>(false);
  const backPage = useRef();
  const form: any = useRef();
  const { hamburgerOptions } = portfolioContent;
  const { setRender , allowChangePage,setAllowChangePage,
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
          setRender({page:'Awards',nextPage:false,afterPage:true});
        }
      });
      observerBackPage.observe(backPage.current as any);
    }
  }, [backPage, allowChangePage, setAllowChangePage, setRender]);
  const sendEmail = (event:any) => {
    event.preventDefault();
    setShowModal(true);
    emailjs.sendForm('service_rkbcldp','template_ciwwbc9',form.current,
    'sbURsNLUEYW_nVaxC').then(result => console.log(result.text))
      .catch(err => console.log(err.text));
    event.target.reset();
  }
  return (
    <Container
      className=" origin-top animate-render-page-gray-to-white"
    >
      <Head>
        <title>{hamburgerOptions[changeLanguage][5]}</title>
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
          className={`absolute top-[16%] left-[16%] max-1650:left-[18%]
          max-1380:left-[10%] max-1280:left-[12%] text-center
          max-desktop:left-[16%] max-desktop:top-[20%] max-900:left-[18%]
          max-795:left-[16%] max-tablet:left-[14%] max-tablet:top-[15%]
          max-630:left-[10%] max-550:left-[14%] w-2/3 font-bold`}
        >
            <Title
                className={`text-6xl max-desktop:text-5xl max-tablet:text-4xl`}
                content={hamburgerOptions[changeLanguage][5]}
            />
        </Container>
        <form
        ref={form as any}
        className={`flex flex-col justify-center text-center
        absolute top-[30%] left-[35%] max-1550:left-[33%] max-1380:left-[23%]
        max-desktop:left-[30%] max-795:left-[25%] max-735:left-[23%]
        max-tablet:left-[25%] max-tablet:top-[22%] max-630:left-[20%]
        max-550:left-[25%] max-phone:left-[20%]`}
        onSubmit={sendEmail}
        >
          <Container className="flex flex-wrap -mx-3 mb-6">
            <ContactUsInput
              id="name-field"
              content={changeLanguage === 0 ? 'Nome' : 'Name'}
              placeholder={changeLanguage === 0 ? 'Seu Nome' : 'Your Name'}
              classNameLabel={`flex uppercase tracking-wide text-gray-700
              text-xs font-bold mb-2`}
              classNameInput={`appearance-none flex w-full bg-gray-200
              text-gray-700 border border-gray-200 rounded py-3 px-4
              leading-tight focus:outline-none focus:bg-white
              focus:border-gray-500 max-desktop:w-[12rem] max-795:w-[25.2rem]
              max-795:mb-6 max-tablet:w-[20rem] max-550:w-[15rem]`}
              inputName="from_name"
              />
            <Container className={`relative max-desktop:right-[2%]
            max-795:right-0`}>
              <ContactUsInput
                id="email-field"
                content="Email"
                placeholder={changeLanguage === 0 ? 'Seu Email' : 'Your Email'}
                classNameLabel={`flex uppercase tracking-wide text-gray-700
                text-xs font-bold mb-2`}
                classNameInput={`appearance-none flex w-full bg-gray-200
                text-gray-700 border border-gray-200 rounded py-3 px-4
                leading-tight focus:outline-none focus:bg-white
                focus:border-gray-500 max-desktop:w-[12rem] max-795:w-[25.2rem]
                max-tablet:w-[20rem] max-550:w-[15rem] `}
                inputName="from_email"
                />
            </Container>
          </Container> 
          <Container className="-mx-3 mb-6">
            <ContactUsInput
              id="category-field"
              content={changeLanguage === 0 ? 'Assunto' : 'Subject'}
              placeholder={changeLanguage === 0 ? 'Assunto' : 'Subject'}
              classNameLabel={`flex uppercase tracking-wide text-gray-700
              text-xs font-bold mb-2`}
              classNameInput={`appearance-none flex w-full bg-gray-200
              text-gray-700 border border-gray-200 rounded py-3 px-4
              leading-tight focus:outline-none focus:bg-white
              focus:border-gray-500 max-desktop:w-[25.2rem]
              max-tablet:w-[20rem] max-550:w-[15rem]`}
              inputName="subject"
            />
          </Container>
          <Container className="-mx-3 mb-6">
            <ContactUsTextArea
              id="message-field"
              content={changeLanguage === 0 ? 'Sua Mensagem' : 'Your Message'}
              placeholder={changeLanguage === 0 ? 'Mensagem' : 'Message'}
              classNameLabel={`flex uppercase tracking-wide text-gray-700
              text-xs font-bold mb-2`}
              classNameTextArea={`appearance-none flex w-[37rem] bg-gray-200
              text-gray-700 border border-gray-200 rounded py-3 px-4
              leading-tight focus:outline-none focus:bg-white
              focus:border-gray-500 max-desktop:w-[25.2rem]
              max-tablet:w-[20rem] max-550:w-[15rem]`}
            />
          </Container>
          <Button
              type="submit"
              className={`bg-[#c31b25] absolute top-[99%] py-4
              px-10 max-desktop:px-6
              max-795:px-2 max-768:top-[95%] rounded-lg
              shadow-[0_2px_3px_0_#c2313a] hover:bg-black hover:text-white
              hover:shadow-[0_2px_3px_0_black]`}
              >
                {changeLanguage === 0 ? 'Fale Comigo' : 'Contact Me'}
              </Button>

        </form>
        <SocialMediasNav color="black" />
        <Container className="flex justify-center items-center">
          <ReactModal
            className={`w-[90%] bg-white max-w-lg p-4 rounded-lg border-2
            border-black shadow-[3px_3px_9px_2px_black]`}
            overlayClassName={`bg-[#ececec] fixed top-0 bottom-0 left-0 right-0
            flex justify-center items-center`}
            isOpen={showModal}
            >
              <Title
                className="text-4xl font-bold p-6"
                content={changeLanguage === 0
                  ? 'Obrigado por entrar em contato!'
                  : 'Thanks you for contact us!'}
              />
              <hr className="border-black"/>
              <Paragraph
                className="p-4"
                content={changeLanguage === 0
                  ? 'Logo nosso representante irá entrar em contato.'
                  : 'Sooner our representative will contact you.'}
              />
              <Button
                className= {`float-right bg-[#c31b25] py-2 mt-12
                px-10 rounded-lg shadow-[0_2px_3px_0_#c2313a] hover:bg-black
                hover:text-white hover:shadow-[0_2px_3px_0_black]`}
                type="button" onClick={() => setShowModal(false)}
                >
                  {changeLanguage === 0 ? 'Fechar' : 'Close'}
                </Button>
          </ReactModal>
        </Container>
      </Main>
    </Container>
  )
}

export default ContactUs;