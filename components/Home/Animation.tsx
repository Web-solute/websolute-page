import { Member } from '@prisma/client';
import styled from 'styled-components';
import useSWR from 'swr';

const AnimationContainer = styled.div`
  background: ${({ theme }) => theme.color.subPrimary};
  height: calc(100vh - 4rem);
`;

interface MembersResponse {
  ok: boolean;
  members: Member[];
}

export default function Animation() {
  const { data } = useSWR<MembersResponse>('/api/users');
  console.log(data);
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
