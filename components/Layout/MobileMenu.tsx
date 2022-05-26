import styled from 'styled-components';
import Link from 'next/link';
import Github from '../../assets/github.svg';
import Instagram from '../../assets/instagram.svg';

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 4rem;
  height: calc(100vh - 4rem);
  width: 100%;
  background: white;
  opacity: 0.9;
`;

const MobileMenuItem = styled.div`
  text-align: center;
  font-size: 3.2rem;
  padding-top: 3rem;
`;

const MobileMenuLink = styled.a`
  color: ${(props) => props.theme.color.primary};
  transition: all 0.2s;
  &:hover {
    color: ${(props) => props.theme.color.secondary};
  }
  cursor: pointer;
`;

const MobileMenuFooter = styled.div`
  text-align: center;
  margin-top: 3.5rem;
`;

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
