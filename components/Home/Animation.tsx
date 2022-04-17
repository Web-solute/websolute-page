import styled from 'styled-components';

const AnimationContainer = styled.div`
  background: ${({ theme }) => theme.color.subPrimary};
  height: 100vh;
`;

export default function Animation() {
  return (
    <>
      <AnimationContainer>
        <div className="pc-only">PC</div>
        <div className="mobile-only">Mobile</div>
      </AnimationContainer>
    </>
  );
}
