export default function Bar() {
  return (
    <div className="absolute text-xs w-11/12 bottom-4 lg:left-10 xl:left-12 font-extralight text-black rounded-md hidden md:inline md:left-8 bg-white">
      <div className="flex justify-between items-center h-12 xl:h-20 relative">
        <div className="absolute left-2 flex items-center px-2 border border-linecolor rounded-md">
          <span classname="h-8 px-2">
            <img src="https://ik.imagekit.io/manuelalferez/piclab/emailIcon_YilYQIaAc.png?updatedAt=1636279381029" />
          </span>
          <form className="p-2 xl:py-4 flex items-center">
            <input
              id="email"
              classname="text-black"
              style={{ outline: 'none' }}
              placeholder="Enter email"
              type="text"
              autocomplete="email"
            />
            <button type="submit" className="font-extralight pl-8 border-l border-linecolor text-herocolor font-bold ">
              Request Beta
            </button>
          </form>
        </div>
        <span className="absolute left-2/4">
          <img src="https://ik.imagekit.io/manuelalferez/piclab/Group_1_5Mba_oQUB.png?updatedAt=1636279117468" />
        </span>
        <div className="flex w-20 justify-between mr-4 absolute right-0">
          <span classname="h-8">
            <img src="https://ik.imagekit.io/manuelalferez/piclab/exitIcon_VB8H2Tvy4.png?updatedAt=1636279381024" />
          </span>
          <button className="font-extralight font-bold text-herocolor">Sign in</button>
        </div>
      </div>
    </div>
  );
}
