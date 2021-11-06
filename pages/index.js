import Head from 'next/head';
import Hero from '../components/Hero';
import Ai from '../components/Ai';
import { client } from '../config/prismic-configuration';

export default function Home({ hero, ai }) {
  return (
    <div className="">
      <Head>
        <title>PicLab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero hero={hero} />
        <Ai ai={ai} />
      </main>

      <footer className="">Footer</footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const hero = await client.getSingle('hero');
  const ai = await client.getSingle('ai');
  console.log('props: ', hero);
  return {
    props: {
      hero,
      ai,
    },
  };
};
