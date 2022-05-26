import styled from 'styled-components';

const FooterContainer = styled.div`
  text-align: center;
  line-height: 1.8rem;
  height: 1.8rem;
  font-size: 0.6rem;
  color: ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.color.subPrimary};
`;

export default function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()}. Websolute all rights reserved.
    </FooterContainer>
  );
}
