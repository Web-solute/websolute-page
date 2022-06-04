import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 3rem;
  height: calc(100vh - 3rem);
  width: 100%;
  background: white;
  opacity: 0.9;
`;

export const MobileMenuItem = styled.div`
  text-align: center;
  font-size: 3.2rem;
  padding-top: 3rem;
`;

export const MobileMenuLink = styled.a`
  color: ${(props) => props.theme.color.primary};
  transition: all 0.2s;
  &:hover {
    color: ${(props) => props.theme.color.secondary};
  }
  cursor: pointer;
`;

export const MobileMenuFooter = styled.div`
  text-align: center;
  margin-top: 3.5rem;
`;
