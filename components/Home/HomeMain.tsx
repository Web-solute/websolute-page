import styled from 'styled-components';

const MainContainer = styled.div`
  height: 200vh;
  background: linear-gradient(white 0.1%, ${(props) => props.theme.color.subPrimary}, white 99.9%);
`;

export default function HomeMain() {
  return (
    <>
      <MainContainer>
        <div className="pc-only">PC</div>
        <div className="mobile-only">Mobile</div>
      </MainContainer>
    </>
  );
}
