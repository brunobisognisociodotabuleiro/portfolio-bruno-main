
import Section from '@atoms/Section';
import Nav from '@atoms/Nav';
import { portfolioContent } from "@constants/index";
import Image from 'next/image';
import Anchor from '@atoms/Anchor';
import SocialMediasNavProps from './types';


const SocialMediasNav: React.FC<SocialMediasNavProps> = ({
  color,
}: SocialMediasNavProps) => {
  const { socialMedias } = portfolioContent;
  return(
  <Section
    className='flex justify-end'
    >
    <Nav className="flex flex-col end-9 px-1 absolute top-[34%]">
      {socialMedias(color).map(({url,logo, alt},i) => (
        <Anchor
        className="py-4 hover:opacity-70"
        key={`a-${i}`}
        href={url}
        >
          <Image width="30" src={logo} alt={alt}/>
        </Anchor>))}
    </Nav>
  </Section>);
}

export default SocialMediasNav;