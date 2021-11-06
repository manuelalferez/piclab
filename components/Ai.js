import { blueGray } from 'tailwindcss/colors';

export default function ai({ ai }) {
  return (
    <div className="bg-ai text-black h-screen flex items-center md:items-start justify-center lg:justify-end overflow-hidden lg:items-center relative ">
      <div className="bg-white border-2 z-20 border-white p-8 m-2 rounded-xl font-thin w-10/12 md:w-5/12 md:mt-12 lg:w-4/12 lg:mr-12 xl:w-3/12 xl:mr-16 lg:mt-0">
        <p className=" text-xs">{ai.data.category[0].text}</p>
        <h1 className="mt-4 text-lg md:text-xl xl:text-2xl font-extralight font-bold">{ai.data.title[0].text}</h1>
        <img src={ai.data.architecture.url} className="mx-auto my-12 md:w-1/2 lg:w-1/3 xl:w-1/4" />
        <p className="text-sm">{ai.data.description[0].text}</p>
      </div>
      <img src={ai.data.graph.url} className="hidden md:inline absolute md:bottom-0 lg:w-10/12 lg:left-0 z-10" />
      <img src={ai.data.background.url} className="absolute h-screen" />
    </div>
  );
}
