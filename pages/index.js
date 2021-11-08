import Head from 'next/head';
import Hero from '../components/Hero';
import Ai from '../components/Ai';
import { client } from '../config/prismic-configuration';
import UseCases from '../components/Usecases';
import Prismic from 'prismic-javascript';
import Economy from '../components/Economy';
import Beta from '../components/Beta';

export default function Home({ hero, ai, usecases, economy, economyNews, beta }) {
  return (
    <div className="">
      <Head>
        <title>PicLab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden">
        <Hero hero={hero} />
        <Ai ai={ai} />
        <UseCases usecases={usecases} />
        <Economy pageInfo={economy} news={economyNews} />
        <Beta beta={beta} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const hero = await client.getSingle('hero');
  const ai = await client.getSingle('ai');
  const usecases = await client.query(Prismic.Predicates.at('document.type', 'usecase'));
  const economy = await client.getSingle('economy');
  const economyNews = await client.query(Prismic.Predicates.at('document.type', 'news'));
  const beta = await client.getSingle('beta');

  return {
    props: {
      hero,
      ai,
      usecases,
      economy,
      economyNews,
      beta,
    },
  };
};
