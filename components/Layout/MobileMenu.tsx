import Link from 'next/link';
import Github from '../../assets/github.svg';
import Instagram from '../../assets/instagram.svg';
import {
  MobileMenuContainer,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuFooter,
} from './MobileMenu.styled';

export default function MobileMenu(props: { setMenu(x: boolean): void }) {
  return (
    <MobileMenuContainer className="mobile-only">
      <MobileMenuItem>
        <Link href="/about">
          <MobileMenuLink onClick={() => props.setMenu(false)}>About</MobileMenuLink>
        </Link>
      </MobileMenuItem>
      <MobileMenuItem>
        <Link href="/project">
          <MobileMenuLink onClick={() => props.setMenu(false)}>Project</MobileMenuLink>
        </Link>
      </MobileMenuItem>
      <MobileMenuItem>
        <Link href="/recruit">
          <MobileMenuLink onClick={() => props.setMenu(false)}>Recruit</MobileMenuLink>
        </Link>
      </MobileMenuItem>
      <MobileMenuFooter>
        <a target="_blank" href="https://github.com/Web-solute">
          <Github style={{ margin: '15px' }} />
        </a>
        <a target="_blank" href="https://www.instagram.com/web_solute/">
          <Instagram style={{ margin: '15px' }} />
        </a>
      </MobileMenuFooter>
    </MobileMenuContainer>
  );
}
