import { FooterContainer } from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()}. Websolute all rights reserved.
    </FooterContainer>
  );
}
