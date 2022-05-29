import styled from 'styled-components';
import { media } from '../../styles/theme';

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  height: 3rem;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderItem = styled.a`
  padding: 1rem;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.color.primary};
  transition: all 0.5s;
  &:hover {
    color: ${(props) => props.theme.color.secondary};
    opacity: 0.9;
  }
  cursor: pointer;
`;

export const HeaderItemActive = styled(HeaderItem)`
  color: ${(props) => props.theme.color.secondary};
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 0.3rem;
  left: 3.2rem;
  ${media.mobile} {
    left: 0.6rem;
  }
  cursor: pointer;
`;

export const ItemContainer = styled.div`
  position: absolute;
  right: 2.4rem;
  top: 0.8rem;
`;

export const HamburgerContainer = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  cursor: pointer;
`;
