import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { media } from '../../styles/theme';
import logo from '/images/logo.png';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  height: 4rem;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderItem = styled.a`
  padding: 1rem;
  font-size: 1.3rem;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.color.primary};
  &:hover {
    color: ${(props) => props.theme.color.subPrimary};
  }
  cursor: pointer;
`;

const HeaderItemActive = styled(HeaderItem)`
  font-size: 1.4rem;
  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
  text-shadow: 0.5px 0.5px #aaa;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1.8rem;
  ${media.mobile} {
    left: 0.6rem;
  }
  cursor: pointer;
`;

const ItemContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.3rem;
`;

export default function Header() {
  const router = useRouter();
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </LogoContainer>
      <ItemContainer className="pc-only">
        <Link href="/about">
          {router.pathname === '/about' ? (
            <HeaderItemActive>About</HeaderItemActive>
          ) : (
            <HeaderItem>About</HeaderItem>
          )}
        </Link>
        <Link href="/project">
          {router.pathname === '/project' ? (
            <HeaderItemActive>Project</HeaderItemActive>
          ) : (
            <HeaderItem>Project</HeaderItem>
          )}
        </Link>
        <Link href="/recruit">
          {router.pathname === '/recruit' ? (
            <HeaderItemActive>Recruit</HeaderItemActive>
          ) : (
            <HeaderItem>Recruit</HeaderItem>
          )}
        </Link>
      </ItemContainer>
    </HeaderContainer>
  );
}
