import Head from 'next/head';
import HomeAnimation from '../components/Home/HomeAnimation';
import HomeMain from '../components/Home/HomeMain';

export default function Home() {
  return (
    <>
      <Head>
        <title>Websolute</title>
      </Head>
      <HomeAnimation />
      <HomeMain />
    </>
  );
}
