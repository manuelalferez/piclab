export default function ai({ ai }) {
  return (
    <div className="relative h-screen bg-ai text-black flex items-center justify-center overflow-hidden md:items-start lg:items-center lg:justify-end">
      <div className="bg-white border-2 z-20 border-white p-8 m-2 rounded-xl font-thin w-10/12 md:w-5/12 md:mt-12 lg:w-4/12 lg:mr-12 lg:mt-0 xl:w-3/12 xl:mr-16">
        <p className=" text-xs">{ai.data.category[0].text}</p>
        <h1 className="mt-4 text-lg font-extralight font-bold md:text-xl xl:text-2xl">{ai.data.title[0].text}</h1>
        <img src={ai.data.architecture.url} className="mx-auto my-12 md:w-1/2 lg:w-1/3 xl:w-1/4" />
        <p className="text-sm">{ai.data.description[0].text}</p>
      </div>
      <img src={ai.data.graph.url} className="hidden absolute z-10 md:inline md:bottom-0 lg:w-10/12 lg:left-0" />
      <img src={ai.data.background.url} className="absolute w-screen h-screen" />
    </div>
  );
}
