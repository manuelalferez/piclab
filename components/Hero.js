export default function Hero({ hero }) {
  return (
    <div className="h-screen relative bg-gradient-to-l from-primary to-secondary">
      <div className="flex justify-center pt-2">
        <img src={hero.data.logo.url} />
        <h2 className="font-brand self-center	pl-2">{hero.data.brandname[0].text}</h2>
      </div>
      <div className="absolute top-1/4 left-6">
        <p className="font-brand text-tiny border-2 border-bcolor w-max text-bcolor px-1 justify-self-center rounded-md">
          {hero.data.announcement[0].text}
        </p>
        <h1 className="text-3xl mt-6 text-white">{hero.data.title[0].text}</h1>
        <p className="mt-12 pr-2 border-l-2 pl-6">{hero.data.description[0].text}</p>
      </div>
    </div>
  );
}
