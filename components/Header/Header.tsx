import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/theme';
import logo from '/assets/logo.png';
import hamburger from '/assets/hamburger.png';
import cancel from '/assets/cancel.png';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  height: 4rem;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderItem = styled.a`
  padding: 1rem;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.color.primary};
  &:hover {
    color: ${(props) => props.theme.color.subPrimary};
  }
  cursor: pointer;
`;

const HeaderItemActive = styled(HeaderItem)`
  font-size: 1.3rem;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
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

const HamburgerContainer = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1rem;
  cursor: pointer;
`;

export default function Header() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <HeaderContainer>
        <LogoContainer onClick={() => setMenu(false)}>
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
        <HamburgerContainer className="mobile-only" onClick={() => setMenu((prev) => !prev)}>
          {menu ? <Image src={cancel} alt="cancel" /> : <Image src={hamburger} alt="hamburger" />}
        </HamburgerContainer>
      </HeaderContainer>
      {menu && <MobileMenu setMenu={setMenu} />}
    </>
  );
}
