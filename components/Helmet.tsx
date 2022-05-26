import Head from 'next/head';

export default function Helmet(props: { title: string }) {
  return (
    <Head>
      <title> {props.title} | Websolute</title>
    </Head>
  );
}
