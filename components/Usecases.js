export default function UseCases({ usecases }) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-4 overflow-visible overflow-x-hidden md:relative md:h-screen">
      <h1 className="px-2 text-center text-xl py-12 md:w-2/4 md:mx-auto lg:text-4xl">
        Why PicLab is the perfect lorem ipsum for you.
      </h1>
      <div className="md:flex md:flex-nowrap md:absolute md:left-12 md:top-96">
        {usecases.results.map((element) => {
          return (
            <div className="relative bg-white text-black w-1/3 bg-white border-2 border-white p-8 m-2 rounded-xl font-thin md:w-72 lg:w-96 lg:h-full 2xl:w-1/2 2xl:h-96 2xl:pb-96">
              <p className="text-xs">{element.data.category[0].text}</p>
              <h1 className="my-4 text-lg">{element.data.title[0].text}</h1>
              <p className="text-sm mb-48">{element.data.description[0].text}</p>
              <img
                src={element.data.image.url}
                className="absolute bottom-0 left-0 p-2 rounded-2xl h-1/3 w-full lg:h-48"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
