import Bar from './Bar';

export default function Hero({ hero }) {
  return (
    <div className="h-screen relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
      <div className="flex justify-center pt-2 lg:justify-start lg:absolute lg:top-8 lg:left-24">
        <img src={hero.data.logo.url} />
        <h2 className="font-brand self-center	pl-2">{hero.data.brandname[0].text}</h2>
      </div>
      <div className="absolute top-1/4 left-6 lg:w-2/6 lg:left-24 xl:w-3/12">
        <p className="font-brand text-tiny border-2 border-bcolor w-max text-bcolor px-1 justify-self-center rounded-md">
          {hero.data.announcement[0].text}
        </p>
        <h1 className="text-3xl mt-6 text-white pr-2 lg:text-4xl">{hero.data.title[0].text}</h1>
        <p className="mt-12 lg:mt-24 lg:pl-8 pr-2 border-l-2 pl-6">{hero.data.description[0].text}</p>
      </div>
      <div className="absolute hidden md:inline md:bottom-24 md:right-0 md:w-4/5 md:h-1/3 lg:top-60 lg:-right-12 lg:w-3/4 xl:w-max xl:top-12 xl:-right-8 2xl:top-40 2xl:right-4 object-scale-down">
        <img src={hero.data.showcase.url} />
      </div>
      <Bar />
    </div>
  );
}
