import Head from 'next/head';
import Hero from '../components/Hero';
import { client } from '../config/prismic-configuration';

export default function Home({ hero }) {
  return (
    <div className="">
      <Head>
        <title>PicLab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero hero={hero} />
      </main>

      <footer className="">Footer</footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const hero = await client.getSingle('hero');
  console.log('props: ', hero);
  return {
    props: {
      hero,
    },
  };
};
