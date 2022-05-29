import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 200vh;
  background: linear-gradient(white 1%, ${(props) => props.theme.color.subPrimary});
`;
