import styled from 'styled-components';

const AnimationContainer = styled.div`
  background: ${({ theme }) => theme.color.subPrimary};
  height: calc(100vh - 4.2rem);
`;

export default function Animation() {
  return (
    <>
      <AnimationContainer>
        <div className="pc-only">PC</div>
        <div className="mobile-only">Mobile</div>
      </AnimationContainer>
      <div style={{ height: '100vh' }} />
    </>
  );
}
