import Head from 'next/head';
import Hero from '../components/Hero';
import Ai from '../components/Ai';
import { client } from '../config/prismic-configuration';
import UseCases from '../components/Usecases';
import Prismic from 'prismic-javascript';
import Footer from '../components/Footer';
import Economy from '../components/Economy';

export default function Home({ hero, ai, usecases, economy, economyNews }) {
  return (
    <div className="">
      <Head>
        <title>PicLab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero hero={hero} />
        <Ai ai={ai} />
        <UseCases usecases={usecases} />
        <Economy pageInfo={economy} news={economyNews} />
        <Footer />
      </main>

      <footer className="">Footer</footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const hero = await client.getSingle('hero');
  const ai = await client.getSingle('ai');
  const usecases = await client.query(Prismic.Predicates.at('document.type', 'usecase'));
  const economy = await client.getSingle('economy');
  const economyNews = await client.query(Prismic.Predicates.at('document.type', 'news'));

  console.log(usecases);
  return {
    props: {
      hero,
      ai,
      usecases,
      economy,
      economyNews,
    },
  };
};
