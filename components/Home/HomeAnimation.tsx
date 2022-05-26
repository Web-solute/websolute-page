import styled from 'styled-components';
import { media } from '../../styles/theme';

const AnimationContainer = styled.div`
  height: calc(100vh - 4rem);
`;

const LogoText = styled.div`
  font-size: clamp(3.5rem, 9.5vw, 7rem);
  background: linear-gradient(
    to right bottom,
    ${(props) => props.theme.color.secondary},
    ${(props) => props.theme.color.primary},
    ${(props) => props.theme.color.subPrimary}
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin-top: 6rem;
  margin-left: 15%;
  ${media.mobile} {
    text-align: center;
    margin-left: 0%;
  }
`;

export default function HomeAnimation() {
  return (
    <>
      <AnimationContainer>
        <LogoText>Websolute</LogoText>
      </AnimationContainer>
    </>
  );
}
