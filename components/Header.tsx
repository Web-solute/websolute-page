import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/project">
        <a>Project</a>
      </Link>
      <Link href="/recruit">
        <a>Recruit</a>
      </Link>
      <Link href="/admin">
        <a>Admin</a>
      </Link>
    </nav>
  );
}
