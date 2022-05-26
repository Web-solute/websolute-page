import styled from 'styled-components';

const MainContainer = styled.div`
  height: calc(200vh - 4rem);
  background: linear-gradient(white 5%, ${(props) => props.theme.color.subPrimary} 95%);
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
