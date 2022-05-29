import styled from 'styled-components';

export const FooterContainer = styled.div`
  text-align: center;
  line-height: 1.8rem;
  height: 1.8rem;
  font-size: 0.6rem;
  color: ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.color.subPrimary};
`;
