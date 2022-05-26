import Header from './Layout/Header';
import Footer from './Layout/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}
