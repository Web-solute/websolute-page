import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/theme';

export const AnimationContainer = styled.div`
  height: calc(100vh - 3rem);
`;

export const LogoText = styled.div`
  font-size: clamp(3.5rem, 8vw, 7.5rem);
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
  padding-top: 8.5rem;
  margin-left: 15%;
  ${media.mobile} {
    font-size: 3rem;
    text-align: center;
    padding-top: 5rem;
    margin-left: 0%;
  }
`;

export const CarouselContainer = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.5rem, 3vw, 3rem);
  padding-top: 8rem;
  margin-left: 30%;
  display: inline-flex;
  align-items: center;
  ${media.mobile} {
    padding-top: 7rem;
    margin-left: 0%;
    display: flex;
    flex-direction: column;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  } 
  100% {
    transform: translateY(0);
  }
`;

export const CarouselRotator = styled.div`
  font-weight: bold;
  font-size: clamp(2rem, 5vw, 4rem);
  border-bottom: solid 3.5px ${(props) => props.theme.color.secondary};
  display: inline-block;
  margin: auto;
  overflow: hidden;
  z-index: -1;
`;

export const CarouselRotatorItem = styled.div`
  animation: ${slideUp} 1.5s;
`;
