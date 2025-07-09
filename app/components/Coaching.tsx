import BannerTitle from "./BannerTitle";

export default function Coaching() {
  return (
    <div>
      <BannerTitle id="coaching">Mi az a coaching? </BannerTitle>

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
