import Seo from '../components/Seo';
import styled from 'styled-components';
import { media } from '../styles/theme';

const Test = styled.div`
  ${media.mobile} {
    color: ${({ theme }) => theme.color.gray};
  }
`;

export default function Home() {
  return (
    <>
      <Seo title={'Home'} />
      <Test className="pc-only">PC</Test>
      <Test className="mobile-only">Mobile</Test>
    </>
  );
}
