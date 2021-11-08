export default function Beta({ beta }) {
  return (
    <div className="h-screen relative bg-betacolor flex flex-col justify-center text-xs">
      <h1 className="px-2 text-center text-xl py-12 md:w-2/4 md:mx-auto lg:text-4xl">{beta.data.title[0].text}</h1>
      <div className="sticky bg-white z-10 text-black flex items-center mx-4 px-2 border border-linecolor rounded-md md:w-6/12 md:mx-auto md:p-2 md:px-4 lg:w-4/12">
        <span classname="h-8 px-2">
          <img src="https://ik.imagekit.io/manuelalferez/piclab/emailIcon_YilYQIaAc.png?updatedAt=1636279381029" />
        </span>
        <form className="p-2 flex items-center xl:py-4">
          <input id="email" style={{ outline: 'none' }} placeholder="Enter email" type="text" autocomplete="email" />
          <button
            type="submit"
            className="absolute right-2 font-extralight pl-8 border-l border-linecolor text-herocolor font-bold md:right-4"
          >
            Request Beta
          </button>
        </form>
      </div>
      <img src={beta.data.background.url} className="absolute object-cover w-screen h-screen top-0" />
    </div>
  );
}
