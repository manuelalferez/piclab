export default function Economy({ pageInfo, news }) {
  console.log(pageInfo);
  return (
    <div className="bg-ai text-white h-screen relative w-screen">
      <div className="absolute z-10 lg:top-80">
        <div className="text-center flex justify-center w-screen lg:justify-start">
          <h1 className="text-2xl md:text-3xl w-1/2 mt-8">{pageInfo.data.title[0].text}</h1>
        </div>
        <div className="p-8 md:flex md:flex-col md:items-start md:pt-24 md:pl-24 md:text-xl">
          {news.results.map((element) => {
            return (
              <div className="flex pb-8 lg:w-2/3">
                <p className="pr-8 font-thin w-24 md:w-52 lg:w-3/12 md:text-sm">{element.data.date[0].text}</p>
                <h2 className="w-2/3 underline md:w-1/2">{element.data.title[0].text}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <img
        src={pageInfo.data.logo.url}
        className="w-1/4 absolute bottom-12 left-1/3 z-10 md:w-4/12 xl:w-3/12 md:bottom-0 md:left-auto md:right-12"
      />
      <img src={pageInfo.data.graph.url} className="hidden md:inline absolute md:bottom-0 lg:w-12/12 lg:right-0 z-10" />
      <img src={pageInfo.data.background.url} className="absolute h-screen w-screen top-0" />
    </div>
  );
}
