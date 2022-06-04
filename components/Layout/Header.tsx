import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import logo from '/assets/logo.png';
import hamburger from '/assets/hamburger.png';
import cancel from '/assets/cancel.png';
import MobileMenu from './MobileMenu';
import {
  HeaderContainer,
  HeaderItem,
  HeaderItemActive,
  LogoContainer,
  ItemContainer,
  HamburgerContainer,
} from './Header.styled';

export default function Header() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <HeaderContainer>
        <LogoContainer className="link" onClick={() => setMenu(false)}>
          <Link href="/">
            <Image src={logo} alt="logo" height={50} width={50} />
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
        <HamburgerContainer className="mobile-only link" onClick={() => setMenu((prev) => !prev)}>
          {menu ? <Image src={cancel} alt="cancel" /> : <Image src={hamburger} alt="hamburger" />}
        </HamburgerContainer>
      </HeaderContainer>
      {menu && <MobileMenu setMenu={setMenu} />}
    </>
  );
}
