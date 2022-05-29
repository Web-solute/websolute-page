import { MainContainer } from './HomeMain.styled';

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
