import Seo from '../components/Seo';
import styled from 'styled-components';
import { media } from '../styles/theme';

const Test = styled.div`
  color: ${({ theme }) => theme.color.primary};
  ${media.mobile} {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export default function Admin() {
  return (
    <>
      <Seo title={'Admin'} />
      <Test className="pc-only">PC</Test>
      <Test className="mobile-only">Mobile</Test>
    </>
  );
}
