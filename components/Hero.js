export default function Hero({ hero }) {
  return (
    <div className="">
      <img src={hero.data.logo.url} />
      <h2 className="font-brand">{hero.data.brandname[0].text}</h2>
      <p>{hero.data.announcement[0].text}</p>
      <h1 className="">{hero.data.title[0].text}</h1>
      <p>{hero.data.description[0].text}</p>
    </div>
  );
}
