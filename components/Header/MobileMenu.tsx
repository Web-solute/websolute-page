import styled from 'styled-components';
import Link from 'next/link';

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 4rem;
  height: calc(100vh - 4rem);
  width: 100%;
  background: white;
  opacity: 0.9;
`;

const MobileMenuItem = styled.div`
  font-size: 3rem;
  padding-top: 3rem;
  padding-left: 2rem;
`;

export default function MobileMenu(props: { setMenu(x: boolean): void }) {
  return (
    <MobileMenuContainer className="mobile-only">
      <MobileMenuItem>
        <Link href="/about">
          <a onClick={() => props.setMenu(false)}>About</a>
        </Link>
      </MobileMenuItem>
      <MobileMenuItem>
        <Link href="/project">
          <a onClick={() => props.setMenu(false)}>Project</a>
        </Link>
      </MobileMenuItem>
      <MobileMenuItem>
        <Link href="/recruit">
          <a onClick={() => props.setMenu(false)}>Recruit</a>
        </Link>
      </MobileMenuItem>
      <MobileMenuItem>+++</MobileMenuItem>
    </MobileMenuContainer>
  );
}
