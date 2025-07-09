export default function Coaching() {
  return (
    <div>
      <div
        id="jelentkezem"
        className="flex justify-center bg-deep p-[10px] mt-[3px] scroll-mt-18 xl:scroll-mt-24"
      >
        <span className="-rotate-9 z-60 border-2 border-white lg:text-lg font-semibold uppercase italic text-gray-800 bg-ground p-2 px-6 rounded-lg text-white">
          Mi az a coaching?
        </span>
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-col gap-8 max-w-6xl">
        <p>
          A coaching egy támogató beszélgetéssorozat, amely segít rálátni
          elakadásokra, és megtalálni a saját, működő megoldásaidat akár a
          magánéletben, akár a munkahelyi kihívások terén.
        </p>
        <p>
          A fókusz mindig a jelenen és a jövőn van: célokat tűzünk ki, és a
          meglévő erőforrásaidra támaszkodva haladunk előre.
        </p>

        <p>
          A coaching nem helyettesíti a pszichoterápiát, és nem dolgozik
          patológiás problémákkal. Célja, hogy gyorsan segítse a tisztánlátást,
          és elindítson egy jobb irányba, akár már néhány alkalom alatt
        </p>
        <p>
          Ideális eszköz lehet kisebb elakadások áthidalására, döntési helyzetek
          tisztázására vagy fejlődési irányok megtalálására
        </p>
      </div>
    </div>
  );
}
