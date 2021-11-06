export default function UseCases({ usecases }) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-4 md:relative md:h-96 overflow-x-hidden overflow-y-overflow">
      <h1 className="px-2 text-center text-xl py-12 md:w-2/4 md:mx-auto">
        Why PicLab is the perfect lorem ipsum for you.
      </h1>
      <div className="md:flex md:flex-nowrap md:absolute z-40 md:left-12 md:top-42 md:overflow-visible">
        {usecases.results.map((element) => {
          return (
            <div className="bg-white text-black w-11/12 md:w-72 bg-white border-2 border-white p-8 m-2 rounded-xl font-thin relative">
              <p className="text-xs">{element.data.category[0].text}</p>
              <h1 className="my-4 text-lg">{element.data.title[0].text}</h1>
              <p className="text-sm mb-48">{element.data.description[0].text}</p>
              <img src={element.data.image.url} className="absolute bottom-0 left-0 p-2 rounded-2xl" />
            </div>
          );
        })}
      </div>
    </div>
  );
}